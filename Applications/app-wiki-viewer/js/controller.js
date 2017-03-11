"use strict";
/**
 * Created by Surreallistic on 13.02.2017.
 */

let searchText;
let paragraphStart = "<li>";
let paragraphEnd = "</li>";
let divStart = "<div class=\"div-radius\"> <ul style=\"list-style-type:none\">";
let divEnd = "</ul></div>";

$( document ).ready(function() {

    getAnimationForSearchIcon();
    setSearchText();

});

function getAnimationForSearchIcon() {
    $('.search-button').click(function(){
        $(this).parent().toggleClass('open');
        console.log();
    });
}

function setSearchText() {
    $(document).keypress(function(e) {
        if(e.which == 13) {
            searchText = $("#search-field").val();
            populateSearchResult();
        }
    });
}

function populateSearchResult() {

    for(let i = 0; i < 10; i++) {
        $(".conteiner").append(
            divStart +
            paragraphStart + "Title" + paragraphEnd +
            paragraphStart + "content" + paragraphEnd +
            divEnd
        );
    }
}