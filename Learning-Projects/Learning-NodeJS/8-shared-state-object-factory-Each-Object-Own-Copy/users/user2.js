let books = require("../books");

let user2_books = books();

user2_books.favMovie = "The War of Art";

console.log("user2 : " + user2_books.favMovie);