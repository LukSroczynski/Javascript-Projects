/**
 * Created by Surreallistic on 10.03.2017.
 */

let person = {
    firstName: "Lukasz",
    lastName: "Sroczynski",
    age: 25
}

function printHello() {
    console.log("Hello World!");
}

let printHelloWorld = function() {
    console.log("Hello World!");
}

console.log(person);

printHello();

/*
    This is gonna print Hello on set timeout
 */
setTimeout(printHello, 3000);

setTimeout(printHelloWorld, 5000);
