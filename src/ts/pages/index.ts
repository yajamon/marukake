window.addEventListener("load", function () {
    let gameMaster = new MainApp.GameMaster();
    let gamePanel = document.querySelector('.gamePanel');
    if (gamePanel) {
        gamePanel.addEventListener("click", (event)=>{
            let target = event.target as HTMLElement;
            if (target.nodeName != "TD") {
                return ;
            }
            event.preventDefault();
            let position: MainApp.Position = {
                x: parseInt(target.dataset['x'], 10),
                y: parseInt(target.dataset['y'], 10)
            };
            gameMaster.put(position);
        });
    }

    let render = function render() {
        let size = gameMaster.field.size;
        let rows = gamePanel.getElementsByClassName("row");
        for (var y_index = 0; y_index < size.height; y_index++) {
            let cells = rows.item(y_index).getElementsByClassName("cell");
            for (var x_index = 0; x_index < size.width; x_index++) {
                let cell = cells.item(x_index);
                let index = x_index + y_index * size.width;
                let piece = gameMaster.field.data[index].piece;
                if (piece instanceof MainApp.Circle) {
                    cell.classList.add("circle");
                } else if (piece instanceof MainApp.Cross) {
                    cell.classList.add("cross");
                } else {
                    cell.classList.remove("circle");
                    cell.classList.remove("cross");
                }
            }
        }
    }

    gameMaster.putFailed = () => {
        console.log("failed put");
        render();
    };
    gameMaster.putSuccess = () => {
        console.log("success put");
        render();
    }

});
