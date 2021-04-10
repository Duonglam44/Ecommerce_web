var slideIndex = 1;

showSlide(slideIndex);

function currentSlide(n){
  showSlide(slideIndex += n);
}

function showSlide(n){
  var slideArray = document.getElementsByClassName("slide-box");
  if(n > slideArray.length) slideIndex = 1 ;
  if(n < 1) slideIndex = slideArray.length ;
  for(var i = 0; i < slideArray.length ; i++){
      slideArray[i].style.display = "none";
  }
  slideArray[slideIndex - 1].style.display = "block";
}

// scrollTop for navbar 

var head = document.getElementById("header");
var upButton = document.getElementById("ontop-btn") ;
console.log(head) ;
console.log(upButton) ;
window.onscroll = function(){
  if(window.pageYOffset > head.offsetTop){
    head.classList.add("dark-nav") ;
    upButton.classList.add("appear-btn");
  } else{
    head.classList.remove("dark-nav");
    upButton.classList.remove("appear-btn");
  }
}

// scrollTop when click
upButton.onclick = function(){
  window.scroll(0,0);
}
// appear quick view - cart

var icon = document.getElementById('cart');
var previewcart = document.getElementById('preview__cart');
var close_btn = document.getElementById('close-btn');
var overLay = document.getElementById('over-lay');

icon.onclick = function (){
  previewcart.classList.add("appear-cart");
  overLay.classList.add('appear-overlay');
}
close_btn.onclick = function() {
  previewcart.classList.remove("appear-cart");
  overLay.classList.remove('appear-overlay');
}
overLay.onclick = function() {
  overLay.classList.toggle("appear-overlay");
  previewcart.classList.toggle("appear-cart");
}

