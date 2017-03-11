function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " added 1 life to " + targetPlayer.name);
    }
}

let player1 = new User();
let player2 = new User();

player1.name = "Lukasz";
player2.name = "Wendy";

player1.giveLife(player2);

console.log(player1.life + " and " + player2.life);

User.prototype.uppercut = function cut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " -3 HP " + targetPlayer.name);
}

player1.uppercut(player1);
console.log(player1.life + " and " + player2.life);

User.prototype.magic = 60;
console.log("P1 magic: " + player1.magic);