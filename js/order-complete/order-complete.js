$(function() {
    // $(".review-item").hide()
    // setStars(0, ".stars")
    const orderdItemData = getAndSetLocalStorage.get()
    const orderdItems = menuItems[orderdItemData[0].cat][orderdItemData[0].itemIndex]

    // TODO add support for multable items in order list
    $(".item > .image").css("background-image", "url(" + orderdItems.image + ")")
    setData(".title", orderdItems.title, ".item")

})

$("#stay").click(function() {
    $(".review-item").hide()
    $(".review-stay").show()
    $(this).attr("class", "review-button-active")
    $("#item").attr("class", "review-button")
})

$("#item").click(function() {
    $(".review-stay").hide()
    $(".review-item").show()
    $(this).attr("class", "review-button-active")
    $("#stay").attr("class", "review-button")
})

$(".give-review-button").click(function() {
    $(".review-item, .review-stay").hide()
    $(".review-thankyou").show()
})

$("#stay, #item").click(function() {
    $(".review-thankyou").hide()
})
 
$("#order-again").click(function() {
    window.location.replace("/index.html")
})