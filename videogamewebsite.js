// The slideshow function is causing some issues; Images not appearing, not automatically transitioning to the next image. I'll come back when I understand this more 

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow-item");
  let dots = document.getElementsByClassName("slideshow-dot");
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

// Automatic slideshow
function automaticSlideShow(n = undefined) {
  let slides = document.getElementsByClassName("slideshow-item");
  let dots = document.getElementsByClassName("slideshow-dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (n === undefined) {
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(automaticSlideShow, 5000); // Change image every 5 seconds
  } else {
    slideIndex = n;
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}

automaticSlideShow(slideIndex);
setTimeout(automaticSlideShow, 5000);
