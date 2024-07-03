
let currentDivIndex = 0;
const divs = document.querySelectorAll('.inner-contain');
const intervalTime = 7000; // 1 second

function updateClass() {

    divs.forEach(div => div.classList.remove('active'));

    divs[currentDivIndex].classList.add('active');

    currentDivIndex = (currentDivIndex + 1) % divs.length;
}

updateClass();

setInterval(updateClass, intervalTime);





let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slidess");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " activedot";
}


function menueBar() {
  document.getElementById("menuNav").classList.toggle("openMenu");
  document.querySelector(".bb").classList.toggle("change");
}