/**
 * Created by Surreallistic on 12.02.2017.
 */
"use strict";

let x = 1;
x = 2;

const y = {
    z: 5
}

y.z = 6;

console.log(x);
console.log(y);








// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }
// // var i still exsists
// console.log("after loop: " + i);
//
//
//
// // function scope in ES-5 is the Only Scope
// function counter() {
//     for(var j = 0; j < 10; j++) {
//         console.log(j);
//     }
//
//     console.log("after loop in function: " + j);
// }
// counter();
// // var j not exsists
// // console.log("after loop in function: " + j);
//
// // function is declared and immediately called. This is called 'immediately invoked function expression'  ~ IIFE
// (function () {
//     for (var j = 0; j < 10; j++) {
//         console.log(j);
//     }
//     console.log("after loop in function: " + j);
// })()
//
// // console.log("after loop in function: " + j);
//
// // "use strict";
// // when variable has no var in front then it's made all the way to the top which means it's gonna be a global variable
// // to prevent this we can use "use strick" statement We Should always Put it Right There!
// // (function () {
// //     for (j = 0; j < 10; j++) {
// //         console.log(j);
// //     }
// //     console.log("after loop in function: " + j);
// // })()
//
// // console.log("after loop in function: " + j);