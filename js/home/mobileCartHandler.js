let isMobile = false

function cheekSize() {
    if ($( window ).width() < 800) {
        isMobile = true
        $("#toggleCart").removeClass("hidden")
        $(".cart-holder, .logo-holder").hide()
    } else {
        isMobile = false
        $("#toggleCart").addClass("hidden")
        $(".cart-holder, .logo-holder").show()
    }
}

$( window ).resize(function() {
    this.cheekSize()
})
cheekSize()

$("#toggleCart").on("click", function() {
    console.log("true pp")
    $(".cart-holder").toggle()
})

