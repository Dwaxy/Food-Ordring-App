getItemAttData = function(i) {
    const el = i[0]
    const data = {
        "cat": $(el).attr('data-cat'),
        "itemIndex": $(el).attr('data-itemIndex'),
        "id": $(el).attr('data-order-id')
    }
    return data
}


getAndSetDomData = function(menuItem, cartItem, orderId) {

    //Get data from menu item
    const data = getItemAttData(menuItem)
    const cat = data.cat
    const itemIndex = data.itemIndex
    //Set that same data to cart item
    $(cartItem).attr({
        "data-cat": cat,
        "data-itemIndex": itemIndex,
        "data-order-id": orderId,
    })

    //Get menu item data object using consts above
    const itemData = menuItems[cat][itemIndex]

    //set local storage 
    const newCartItem = {cat, itemIndex, orderId}
    getAndSetLocalStorage.set(newCartItem)
    return(itemData)
}

getAndSetLocalStorage = {
    set: function(item) {
        // some code from https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
    
        if( JSON.parse(localStorage.getItem('orders')) ) {
            var currentItems = JSON.parse(localStorage.getItem('orders'))
            currentItems.push(item)
        } else {
            var currentItems = []
        currentItems.push(item)
        }
        const newItems = currentItems
        localStorage.setItem('orders', JSON.stringify(newItems))
        return newItems
    },

    get: function() {
        return JSON.parse(localStorage.getItem('orders'))
    },

    replaceAllWith: function(newArray) {
        localStorage.clear()
        localStorage.setItem('orders', JSON.stringify(newArray))
    }
}


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

setTotalPrice = function(perant, newPrice) {
    setData("#total-price", "Total Price $"+newPrice, perant)
}