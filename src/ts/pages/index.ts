window.addEventListener("load", function(){
    document.body.appendChild(document.createTextNode("Hello typescript world!"));
    
    let gamePanel = document.querySelector('.gamePanel');
    gamePanel.addEventListener("click", (event)=>{
        let target = event.target as HTMLElement;
        if (target.nodeName != "TD") {
            return ;
        }
        event.preventDefault();
    });
});