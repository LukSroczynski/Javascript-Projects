/**
 * Created by Surreallistic on 11.03.2017.
 */

function warOfArt() {
    console.log("War of Art")
}

function cleanCode() {
    console.log("Clean Code");
}

/*
    if we wanna export one function
 */
module.exports.warOfArt = warOfArt;


/*
    Another way to do that
 */

module.exports = {

    cleanCode: function() {
        console.log("Clean Code");
    },

    matrix: function() {
        console.log("The Matrix");
    },

    favBook: "The War of Art"

}