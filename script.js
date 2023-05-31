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
  // dots[slideIndex-1].className += " active";
}
var revIndex =1;
showRevs(revIndex);

function plusRevs(n) {
  showRevs(revIndex += n);
}

function currentRev(n) {
  showRevs(revIndex = n);
}

function showRevs(n) {
  var j;
  var revs = document.getElementsByClassName("revs");
  var dots = document.getElementsByClassName("dot");
  if (n > revs.length) {revIndex = 1}
  if (n < 1) {revIndex = revs.length}
  for (j = 0; j < revs.length; j++) {
      revs[j].style.display = "none";
  }
  for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }
  revs[revIndex-1].style.display = "block";
  // dots[revIndex-1].className += " active";
}