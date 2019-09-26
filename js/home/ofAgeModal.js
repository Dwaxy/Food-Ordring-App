
//change selecter to something like "showsAgeModal", as I will loop all 
//alcoholic drinks and add the class name later

$(function() { 
    $("#of-age-modal, #of-age-background").hide()
})

var modalShowing = false 

$(document).on('click', ".askAge", function() {
    if(modalShowing === false) {
        $("#of-age-modal, #of-age-background").show()
        modalShowing = true
    }       
});

$(".no, .yes").click(function() {
    $("#of-age-modal, #of-age-background").hide()
})