window.addEventListener('load', function () {
    var video = document.getElementById('myVideo');
    video.style.display = 'block';
    video.play();
});

var videoPage = document.querySelector('.video-page');
var skipButton = document.querySelector('.skip');
skipButton.addEventListener('click', function () {
    videoPage.style.display = "none";
})


var buttonYes = document.querySelector('.option1-a');
var response1 = document.querySelector('.response1')
var response2 = document.querySelector('.response2')
var messageReply = document.querySelector('.messagebox--reply')
buttonYes.addEventListener("click", function () {
    response1.style.display = "flex";
    response2.style.display = "flex";
    document.querySelector('.option1').style.display = "none";
    messageReply.style.display = "block";
    document.querySelector('.continue').style.display = "block"
})
var btnContinue = document.querySelector('.continue');
var carouselPage = document.querySelector('.carousel-page');
var mainPage = document.querySelector('.main-page')
btnContinue.addEventListener('click', function () {
    mainPage.style.display = "none";
    carouselPage.style.display = "block";

})


const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');
const carouselItems = carousel.querySelectorAll('.carousel-item');

let currentIndex = 0;

function goToSlide(index) {
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

function goToNextSlide() {
    if (currentIndex < carouselItems.length - 1) {
        goToSlide(currentIndex + 1);
    } else {
        goToSlide(0);
    }
}

function goToPrevSlide() {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    } else {
        goToSlide(carouselItems.length - 1);
    }
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);

var lastPage1 = document.querySelector('.lastpage1');
var send = document.querySelector('.send')
carouselContainer.addEventListener('click', function () {
    mainPage.style.display = "none";
    carouselPage.style.display = "none";
    send.style.display = "none"
    document.querySelector('.response3').style.display = "flex"
    lastPage1.style.display = "block";
});

var optionB = document.querySelector('.option1-b');
var continueBtn = document.querySelector('.continue');
var lovehear = document.querySelector('.lovehear');
optionB.addEventListener('click', function () {

    document.querySelector('.messagereplyNO').innerHTML = "No it doesn't";
    document.querySelector('.responsetext1').innerHTML = "At No More Courses, we have demonstrated our ability to alter cultural attitudes, awareness, concern, and behavior."
    response1.style.display = "flex";
    document.querySelector('.responsetext2').innerHTML = "Let me show you how!"
    response2.style.display = "flex";
    document.querySelector('.option1').style.display = "none";
    messageReply.style.display = "block";
    continueBtn.style.display = "none";
    lovehear.style.display = "block";
})

lovehear.addEventListener('click', function () {
    mainPage.style.display = "none";
    carouselPage.style.display = "none";
    send.style.display = "none"
    document.querySelector('.response3').style.display = "flex"
    document.querySelector('.lastpage1-banner').style.display = "none";
    lastPage1.style.display = "block";
    document.querySelector('.lastpage2-banner').style.display = "block";

})