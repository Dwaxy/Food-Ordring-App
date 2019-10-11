$(".nav-menu > .navbar-item").click(function(e) {
    let catName = $(e.target).text().toLowerCase()
    setMenuItems(menuItems[catName])
})