"use strict";
/**
 * Created by Surreallistic on 13.02.2017.
 */

let searchText;

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
    // $(".conteiner").append("<div class=" + "div-radius" + ">hello world</div>");
    $(".conteiner").append("<div class=\"div-radius\">hello world</div>");
}