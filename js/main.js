// Mobile Version NavBar
var open = document.getElementById('hamburger');
var changeIcon = true;

function a() {

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        console.log("test")

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
};

open.addEventListener("click", a, false);




// Classement Home Page Changes
const film = document.getElementById("cFilm");
const serie = document.getElementById("cSerie");
const anime = document.getElementById("cAnime");

const classementTitle = document.getElementById("cTitle");

const num1 = document.getElementById("numOne");
const num2 = document.getElementById("numTwo");
const num3 = document.getElementById("numThree");
const num4 = document.getElementById("numFour");
const num5 = document.getElementById("numFive");


film.addEventListener("click", function(Ffilm) {

    film.style.color = "#e63946";
    serie.style.color = "#eeeeee";
    anime.style.color = "#eeeeee";

    classementTitle.innerText = "FILMS POPULAIRES :";
    
    num1.innerText = "AVATAR";
    num2.innerText = "AVENGERS: ENDGAME";
    num3.innerText = "TITANIC";
    num4.innerText = "STAR WARS VII";
    num5.innerText = "SPIDERMAN: NO WAY HOME";
})

serie.addEventListener("click", function(Fserie) {

    film.style.color = "#eeeeee";
    serie.style.color = "#e63946";
    anime.style.color = "#eeeeee";

    classementTitle.innerText = "SERIES POPULAIRES :";

    num1.innerText = "GAME OF THRONE";
    num2.innerText = "BREAKING BAD";
    num3.innerText = "ARCANE";
    num4.innerText = "CHERNOBYL";
    num5.innerText = "PEAKY BLINDERS";
})

anime.addEventListener("click", function(Fanime) {
    
    film.style.color = "#eeeeee";
    serie.style.color = "#eeeeee";
    anime.style.color = "#e63946";

    classementTitle.innerText = "ANIME POPULAIRES :";
    
    num1.innerText = "L'ATTAQUE DES TITANS";
    num2.innerText = "DEATH NOTE";
    num3.innerText = "COWBOY BEBOP";
    num4.innerText = "FULLMETAL ALCHEMIST";
    num5.innerText = "HUNTER x HUNTER";
})
