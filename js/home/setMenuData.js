
setMenuItems = function(menuItemCat = menuItems.burgers) {
    $('.menu-item').each(function(index) {
        const item = $(this)
        item.hide()
        buildMenuItem(index, item, menuItemCat)
    })
}


buildMenuItem = function(i, item, itemArray) {
    const data = itemArray[i] || null

    // !NOTE code will fail if it does not have enough data items to add to the dom
    // Menu items are hidden by defult, so retuning if data is null does not leave empty dom menu items
    if(!data) return

    $(item).fadeIn(1000)
    setData(".name", data.title, item)
    setData(".price", "$"+data.price, item)
    $(item).find(".image").css("background-image", "url(" + data.image + ")")
    // Set review stars if item has them
    if(data.reviews !== null && data.stars !== null) {

        $(item).find(".review-holder").css("display", "flex")
        setStars(data.stars, item)
        setData(".review-count", data.reviews + " Reviews", item)
    }

    if(data.askAge) {
        $(item).addClass("askAge")
    }

    //set index number and object name in html for use with cart
    $(item).attr({
        "data-cat": data.cat,
        "data-itemIndex": i
    })
}

setMenuItems()