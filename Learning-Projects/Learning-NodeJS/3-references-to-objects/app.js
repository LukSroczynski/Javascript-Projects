/*
    In nodeJS everything is a reference


    EQUAL SIGNS:

    == compares vales

    === compares also types

 */

let randomObject = {
    asd: "asd",
    qwe: "qwe"
}

let anotherObject = randomObject;
anotherObject.asd = "123qweasd";

console.log(randomObject.asd);

