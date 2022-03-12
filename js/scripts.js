/* BUSINESS LOGIC */











/* UI LOGIC */
$(document).ready(function(){
    $(".clickable1").click(function(){
        $("#design").toggle();
        $("#hidden-design").toggle();
    });

    $(".clickable2").click(function(){
        $("#development").toggle();
        $("#hidden-development").toggle();
    });

    $(".clickable3").click(function(){
        $("#project-management").toggle();
        $("#hidden-pm").toggle();
    });
});
