//some code from https://www.w3schools.com/howto/howto_js_progressbar.asp

function move() {
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 60);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%'
        }
    }
    setTimeout(function(){
        window.location.replace("/order-complete.html")
    }, 3000)
}

move()

// TODO add up total ETA (when cart is fixed)
// is null if no order item exists beforhand
const items = getAndSetLocalStorage.get()[0] || []
if(items) {
    const itemData = menuItems[items.cat][items.itemIndex]
    setData(".eta", "ETA: "+ itemData.eta+ " minutes", ".eta-holder")
}
