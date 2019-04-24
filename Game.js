function addButton(id, label, parent) {
    let e = document.createElement("button");
    e.innerHTML = label;
    e.id = id
    parent.appendChild(e);
    return e;
}

class Game {
    constructor() {
        this.resources = {money: 0,player: 0,hype: 0,popularity: 0,codelines: 0};
        this.abilities = {release:false}
        
        addButton("code", "Code a game", document.getElementById("developer"))
                .addEventListener("click", function() {
                    game.add("codelines");
                });

                time = setInterval(loop, 300);
    }
    add(resourceName, i=1) {
        this.resources[resourceName] += i;
    }

    buildUI() {
        document.getElementById("player").innerHTML = this.resources.player;
        document.getElementById("money").innerHTML = this.resources.money;
        document.getElementById("hype").innerHTML = this.resources.hype;
        document.getElementById("codelines").innerHTML = this.resources.codelines;
        document.getElementById("popularity").innerHTML = this.resources.popularity;
        this.buildVisible();
    }

    buildVisible() {
        if(this.resources.codelines>=20 && this.abilities.release == false) {
            this.abilities.release = true;
            addButton("release", "Release a version", document.getElementById("developer"))
                .addEventListener("click", function() {
                    game.add("popularity")
                    game.add("hype", 20)
                });
            }
    }

    
}


