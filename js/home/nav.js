
// Code from bulma docs on the nav comp https://bulma.io/documentation/components/navbar/

$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active")
        $(".navbar-menu").toggleClass("is-active")
  
    })

    // This code is by me
    $(".navbar-item").click(function() {
        $(".navbar-item").removeClass("is-active-nav-item")
        $(this).toggleClass("is-active-nav-item")
    })
})