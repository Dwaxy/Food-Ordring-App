handleLocalStorage = function(data) {

     // some code from https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
    
     localStorage.setItem('order', JSON.stringify(data))

}


$("#order").click(function() {
    window.location.href = 'eta.html'
})