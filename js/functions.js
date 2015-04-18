/*var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good morning!';
}

document.write('<h3>' + greeting '</h3>');*/

$(document).ready(function(){
    $("#details-left").click(function(){
        $("#section-left-div").animate({
            height:'toggle'
        });
    });
    $("#details-center").click(function(){
        $("#section-center-div").animate({
            height:'toggle'
        });
    });
    $("#details-right").click(function(){
        $("#section-right-div").animate({
            height:'toggle'
        });
    });
});
