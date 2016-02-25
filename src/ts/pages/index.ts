window.addEventListener("load", function(){
    let gamePanel = document.querySelector('.gamePanel');
    if (gamePanel) {
        gamePanel.addEventListener("click", (event)=>{
            let target = event.target as HTMLElement;
            if (target.nodeName != "TD") {
                return ;
            }
            event.preventDefault();
        });
    }
});