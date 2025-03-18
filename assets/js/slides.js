///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECTION SHOWCASE  SLIDES------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change slide every 3 seconds
showSlide(currentSlide);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SECTION AI SLIDES----------------------------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const aislides = document.querySelectorAll('.aislide');
let currentSlideAi = 0;

function showSlideAi(slideIndex) {
    aislides.forEach((aislide) => {
        aislide.classList.remove('active');
    });

    aislides[slideIndex].classList.add('active');
}

function nextSlideAi() {
    currentSlideAi++;
    if (currentSlideAi >= aislides.length) {
        currentSlideAi = 0;
    }
    showSlideAi(currentSlideAi);
}

setInterval(nextSlideAi, 4000); // Change slide every 3 seconds

showSlideAi(currentSlideAi);
