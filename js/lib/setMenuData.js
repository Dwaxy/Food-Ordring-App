
setData = function(el, data, perant) {
    if(!data) {
        return
    }
    $(perant).find(el).text(data)
}

setStars = function(stars, el) {
    const counts = [
        "☆☆☆☆☆",
        "★☆☆☆☆",
        "★★☆☆☆",
        "★★★☆☆",
        "★★★★☆",
        "★★★★★"
    ]
    $(el).find(".stars > span").text(counts[stars])
}

buildMenuItem = function(i, item, itemArray) {
    const data = itemArray[i]
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

$(function() { 
    // TODO support diff types of food, loop for drinks page, ect
    $('.menu-item').each(function(i, obj) {
        const item = $(this)
        buildMenuItem(i, item, menuItems.burgers)
    })
})