removeCartItem = function(cartItem) {
    const data = getItemAttData(cartItem)
    const oldCartItems = getAndSetLocalStorage.get()
    const newCartItems = oldCartItems.filter(function(el) { return el.orderId != data.id; })
    getAndSetLocalStorage.replaceAllWith(newCartItems)
    $(cartItem).remove()
}

$(".remove-cart-item").click(function() {
    //Pass the cart item to remove function
    removeCartItem($(this).parents(".cart-item"))
})