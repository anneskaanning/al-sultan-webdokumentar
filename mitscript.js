"use strict";
//SLIDESHOW
var slideIndex = 1;
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
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};

function erSynlig(elementId) {
    const elementBoks =
        document.getElementById(elementId).getBoundingClientRect();
    const halvtredsPct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }
}

function aktiverMultimedier() {
    for (let i = 0; i <= AVIdListe.length - 1; i++) {
        if (erSynlig(AVIdListe[i])) {
            AVIndholdsliste[i].loop = true;
            AVIndholdsliste[i].play();
        } else {
            AVIndholdsliste[i].pause();
            AVIndholdsliste[i].currentTime = 0;
        }
    }
}


//HOVEDPROGRAM


//VIDEOER

const AVIdListe = ["intro", "familiefad"];
const AVIndholdsliste = [];

AVIndholdsliste[0] = document.getElementById("intro")
AVIndholdsliste[1] = document.getElementById("familiefad")

window.addEventListener("scroll", function () {
    aktiverMultimedier();
});



//LYDOPTAGELSER

const sofie = new Audio("sound/sofie.mp3");

document.getElementById("sofie").addEventListener("click", event => {
    if (!sofie.paused) {
        sofie.pause();
    } else {
        sofie.play();
    }

});

const muhammed = new Audio("sound/muhammed.mp3");

document.getElementById("muhammed").addEventListener("click", event => {
    if (!muhammed.paused) {
        muhammed.pause();
    } else {
        muhammed.play();
    }

});

const sandra = new Audio("sound/sandra.mp3");

document.getElementById("sandra").addEventListener("click", event => {
    if (!sandra.paused) {
        sandra.pause();
    } else {
        sandra.play();
    }

});
