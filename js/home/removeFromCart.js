removeCartItem = function(cartItem) {
    console.log("remove cart item called")
    const data = getItemAttData(cartItem)
    const oldCartItems = getAndSetLocalStorage.get()
    const newCartItems = oldCartItems.filter(function(el) { return el.orderId != data.id; })
    getAndSetLocalStorage.replaceAllWith(newCartItems)
    $(cartItem).fadeOut("fast", function() { 
        $(this).remove() 
    })

}


$(".right, .remove-cart-item").click(function() {
    //Pass the cart item to remove function
    console.log("clicked")
    removeCartItem($(this).parents(".cart-item"))
})

$("body").on("click", ".remove-cart-item", function() {
    removeCartItem($(this).parents(".cart-item"))
})
