window.addEventListener("load", function(){
    let gamePanel = document.querySelector('.gamePanel');
    gamePanel.addEventListener("click", (event)=>{
        let target = event.target as HTMLElement;
        if (target.nodeName != "TD") {
            return ;
        }
        event.preventDefault();
    });
});