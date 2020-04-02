
$(document).ready(function() {
    // This code is by me
    $(".navbar-item").click(function() {
        $(".navbar-item").removeClass("nav-active")
        $(this).toggleClass("nav-active")
        let catName = $(this).text()
        $(".menu-header > h2").html(catName)
    })
})