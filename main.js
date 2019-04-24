time = 0;
game = new Game();

function loop() {
    console.log("loop");
    let res = game.resources;
    if (res.hype!=0) res.hype-=5;
    if (res.hype>0 && res.popularity>0) res.player += res.hype*res.popularity

    if (res.popularity<0) res.player -=1

    game.buildUI();
    
}


addButton("", "Stop the time", document.getElementById("footer"))
    .addEventListener("click", function() {
        clearInterval(time);
    });