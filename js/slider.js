var navbar = document.querySelector('.fixed-top-section');
var slideIndex = 1;

slideshow(slideIndex);

function curentSlide(n) {
    slideshow(slideIndex += n);
}


function slideshow(n) {
    var slideArray = document.getElementsByClassName("slide-box");
    if (n > slideArray.length) slideIndex = 1;
    if (n < 1) slideIndex = slideArray.length;
    for (var i = 0; i < slideArray.length; i++) {
        slideArray[i].style.display = "none";
    }
    slideArray[slideIndex - 1].style.display = "block";
}


// preview section

// var preview = document.querySelector('.product-preview');
// console.log(preview);

// var btnQuickView = document.querySelectorAll('.ov-quickview');
// console.log( btnQuickView);
// btnQuickView.forEach(e => {
//     e.onclick = function () {
//         preview.classList.add('appear-preview'); 
//     }
// });
