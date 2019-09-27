
$(".menu-item").click(function() {
    $("#cart-blurb, #cart-help-button").hide()
    $("#help-order-buttons").css("display", "flex")
})

buildCartItem = function(menuItem) {
    const newCartItem = $("#cartitem-template")
        .clone(false)
        .removeAttr("id")

    console.log(newCartItem)

    newCartItem.insertAfter("#cartitem-template")
    //Get object and index atts from clicked menu item
    //Also set that same data into the dom of the cart item
    //As well as set that data to local storage

    const noOrderItems = getAndSetLocalStorage.get()
    const data = getAndSetDomData(menuItem, newCartItem, noOrderItems === null ? 0 : noOrderItems.length++)
    //console.log(data)

    // Apply data to the cloned cart item template
    newCartItem.find(".image").css("background-image", "url(" + data.image + ")")
    setData(".price", "$"+data.price, newCartItem)
    setData(".name", data.title, newCartItem)
    if(data.reviews) {
        setStars(data.stars, newCartItem)
        setData(".toggleReviews > span", "View Reviews", newCartItem)
    }
    setTotalPrice(".cart", data.price)
}

$(".menu-item").click(function() {
    $(".item-holder").show()
    buildCartItem($(this))
})