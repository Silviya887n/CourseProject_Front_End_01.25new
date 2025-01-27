
$(function() {
    $('#gallery a').lightBox({fixedNavigation:true});
});


function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

//       /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
/*Gallery*/
let slideIndex = 1;

showSlides();

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides() {

let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("demo");
let captionText = document.getElementById("caption");

let i = 0;
while (i < slides.length) {
slides[i].style.display = "none";  
i++;
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
slides[slideIndex-1].style.display = "block";  
setTimeout(showSlides, 3000); //

// if (n > slides.length) {slideIndex = 1}
// if (n < 1) {slideIndex = slides.length}
// for (i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex-1].style.display = "block";
// dots[slideIndex-1].className += " active";
// captionText.innerHTML = dots[slideIndex-1].alt;
captionText.innerHTML = "Our Pets";
captionText.style.fontSize="x-large";
}