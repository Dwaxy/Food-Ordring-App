
$(".menu-item").click(function() {
    $("#cart-blurb, #cart-help-button").hide()
    $("#help-order-buttons").css("display", "flex")
})


let itemEtas = []
var totalEta = 0
setTotalEta = function(item) {
    itemEtas.push(item)
    itemEtas.reduce(add,0)
    function add(accumulator, a) {
        totalEta = accumulator + a
        return totalEta
    }
    localStorage.setItem('totalEta', JSON.stringify(totalEta))
}

buildCartItem = function(menuItem) {
    const newCartItem = $("#cartitem-template")
        .clone(false)
        .removeAttr("id")

    newCartItem
        .insertAfter("#cartitem-template")
        .hide()
        .fadeIn()
        
    //Get object and index atts from clicked menu item
    //Also set that same data into the dom of the cart item
    //As well as set that data to local storage

    const noOrderItems = getAndSetLocalStorage.get()
    const data = getAndSetDomData(menuItem, newCartItem, noOrderItems === null ? 0 : noOrderItems.length++)
    console.log("item data, ")
    console.log(data)

    // Apply data to the cloned cart item template
    newCartItem.find(".image").css("background-image", "url(" + data.image + ")")
    setData(".price", "$"+data.price, newCartItem)
    setData(".name", data.title, newCartItem)
    if(data.reviews) {
        setStars(data.stars, newCartItem)
        setData(".toggleReviews > span", "View Reviews", newCartItem)
    }
    setTotalPrice(".cart", data.price)
    setTotalEta(data.eta)
}

$(".menu-item").click(function() {
    $(".item-holder").show()
    buildCartItem($(this))
})