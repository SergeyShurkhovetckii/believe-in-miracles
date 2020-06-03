import $ from "jquery";

$(document).ready(function(){
    $('.dropdown-open').click(function(){
        $('.menu-dropdown').slideToggle(500);      
        return false;
    });
});
