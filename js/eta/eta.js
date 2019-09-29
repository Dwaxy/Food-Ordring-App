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


const items = getAndSetLocalStorage.get()[0] || []
const totalEta = JSON.parse(localStorage.getItem('totalEta'))
if(items) {
    const itemData = menuItems[items.cat][items.itemIndex]
    setData(".eta", "ETA: "+ totalEta + " minutes", ".eta-holder")
}
