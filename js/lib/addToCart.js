
$(".menu-item").click(function() {
    $("#cart-blurb, #cart-help-button").hide()
    $("#help-order-buttons").css("display", "flex")
})

buildCartItem = function(i) {
    const template = $("#cartitem-template")
    
    template
        .removeAttr("id")
        .clone(false)
    // TODO Fix duplication issue 
    const newCartItem = template
    $(newCartItem).insertAfter(".cart-item")

    //Get object and index atts from clicked menu item
    const itemAttData = i[0]
    const cat = $(itemAttData).attr('data-cat')
    const itemIndex = $(itemAttData).attr('data-itemIndex')

    //Get menu item data object using consts above
    const data = menuItems[cat][itemIndex]
    const localStorageData = {cat, itemIndex}

    handleLocalStorage(localStorageData)

    // Apply data to the cloned cart item template
    $(".cart-item").find(".image").css("background-image", "url(" + data.image + ")")
    setData(".price", data.price, newCartItem)
    setData(".title", data.title, newCartItem)
    setStars(data.stars, newCartItem)
}

$(".menu-item").click(function() {
    $(".item-holder").show()
    buildCartItem($(this))
})