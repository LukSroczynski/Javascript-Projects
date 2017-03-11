/*
    this - references to the Object that called it
 */

let x = {
    printSomething: function () {
        console.log("Something");
        console.log(x === this);
    }
}

x.printSomething();

function globalClosure() {
    console.log(this === global);
}

globalClosure();
