// fixed navbar.
var navbar = document.getElementById('navbar');
var ontop = document.getElementById('ontop');
window.onscroll = function () {
    if (window.pageYOffset > navbar.offsetTop ) {
        navbar.classList.add('fixed-navbar');
        ontop.classList.remove('appear');
    } else {
        navbar.classList.remove('fixed-navbar');
        ontop.classList.add('appear');
    }
}
ontop.onclick = function() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
// appear cart section{

var navCart = document.getElementById('navbar__cart');
var preCart = document.getElementById('cart');
var btnClose = document.getElementById('close-cart');
var overLay = document.querySelector('.over-lay');

navCart.onclick = function () {
    preCart.classList.add('appear-cart');
    overLay.classList.add('appear-cart');
}
btnClose.onclick = function () {
    preCart.classList.remove('appear-cart');
    overLay.classList.remove('appear-cart');
}

overLay.onclick = function () {
    preCart.classList.remove('appear-cart');
    overLay.classList.remove('appear-cart');
    lovedCart.classList.remove('appear-cart');
}

// appear quick view cart loved-products

var navLoved = document.getElementById('navbar__loved');
var btnCloseLovedCart = document.getElementById('close-loved-cart');
var lovedCart = document.getElementById('loved-products');
navLoved.onclick = function () {
    overLay.classList.add('appear-cart');
    lovedCart.classList.add('appear-cart');
}
btnCloseLovedCart.onclick = function () {
    overLay.classList.remove('appear-cart');
    lovedCart.classList.remove('appear-cart') ;
}


