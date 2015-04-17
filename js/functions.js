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
    $(".read-more").click(function(){
        $("#section-left-div").animate({
            height:'toggle'
        });
    });
});
