// var j= jQuery.noConflict();

$(document).ready(function(){
    $nav = $('.nav-bar');
    $collapse = $('.collapse-m');
    $collapse.click(function(){
        $nav.toggleClass('collapse');
    })
});