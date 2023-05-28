const burger = document.getElementsByClassName('burger')[0];
const nav = document.getElementsByClassName('nav-links')[0];
const overlay = document.getElementsByClassName('overlay')[0];

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
    overlay.classList.toggle('overlay-active')
})
var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var slideIndex =1;
showRevs(slideIndex);

function plusSlides(n) {
  showRevs(slideIndex += n);
}

function currentSlide(n) {
  showRevs(slideIndex = n);
}

function showRevs(n) {
  var i;
  var slides = document.getElementsByClassName("revs");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}