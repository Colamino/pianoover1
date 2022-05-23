for (var i = 0; i < document.querySelectorAll(".pianokey").length; i++) {
    document.querySelectorAll(".pianokey")[i].addEventListener("click", function() {
        var everyClick = this.innerHTML;
        makeSound(everyClick);
        musickeyy (everyClick)
    })
}

var down = false;
document.addEventListener('keydown', function () {
    if(down) return;
    down = true;
    var everyKey = event.key;
    makeSound(everyKey);
    keyAnimation (everyKey);
    musickeyy (everyKey);
}, false);

document.addEventListener('keyup', function () {
    down = false;
}, false);





function makeSound(click) {
    switch (click) {
        case "Q":
        case "q":
            var audio = new Audio("sounds/piano-mp3_G2.mp3");
            audio.play();
            break;
        case "W":
        case "w":
            var audio = new Audio("sounds/piano-mp3_Gb2.mp3");
            audio.play();
            break;
        case "E":
        case "e":
            var audio = new Audio("sounds/piano-mp3_A2.mp3");
            audio.play();
            break;
        case "R":
        case "r":
            var audio = new Audio("sounds/piano-mp3_Ab2.mp3");
            audio.play();
            break;
        case "T":
        case "t":
            var audio = new Audio("sounds/piano-mp3_B2.mp3");
            audio.play();
            break;
        case "Y":
        case "y":
            var audio = new Audio("sounds/piano-mp3_Bb2.mp3");
            audio.play();
            break;
        case "U":
        case "u":
            var audio = new Audio("sounds/piano-mp3_C3.mp3");
            audio.play();
            break;
        case "I":
        case "i":
            var audio = new Audio("sounds/piano-mp3_D3.mp3");
            audio.play();
            break;
        case "O":
        case "o":
            var audio = new Audio("sounds/piano-mp3_Db3.mp3");
            audio.play();
            break;
        case "P":
        case "p":
            var audio = new Audio("sounds/piano-mp3_E3.mp3");
            audio.play();
            break;
        case "A":
        case "a":
            var audio = new Audio("sounds/piano-mp3_Eb3.mp3");
            audio.play();
            break;
        case "S":
        case "s":
            var audio = new Audio("sounds/piano-mp3_F3.mp3");
            audio.play();
            break;
        case "D":
        case "d":
            var audio = new Audio("sounds/piano-mp3_G3.mp3");
            audio.play();
            break;
        case "F":
        case "f":
            var audio = new Audio("sounds/piano-mp3_Gb3.mp3");
            audio.play();
            break;
        case "G":
        case "g":
            var audio = new Audio("sounds/piano-mp3_A3.mp3");
            audio.play();
            break;
        case "H":
        case "h":
            var audio = new Audio("sounds/piano-mp3_Ab3.mp3");
            audio.play();
            break;
        case "J":
        case "j":
            var audio = new Audio("sounds/piano-mp3_B3.mp3");
            audio.play();
            break;
        case "K":
        case "k":
            var audio = new Audio("sounds/piano-mp3_Bb3.mp3");
            audio.play();
            break;
        case "L":
        case "l":
            var audio = new Audio("sounds/piano-mp3_C4.mp3");
            audio.play();
            break;
        case "X":
        case "x":
            var audio = new Audio("sounds/piano-mp3_D4.mp3");
            audio.play();
            break;
        case "C":
        case "c":
            var audio = new Audio("sounds/piano-mp3_Db4.mp3");
            audio.play();
            break;
        case "V":
        case "v":
            var audio = new Audio("sounds/piano-mp3_E4.mp3");
            audio.play();
            break;
        case "B":
        case "b":
            var audio = new Audio("sounds/piano-mp3_Eb4.mp3");
            audio.play();
            break;
        case "N":
        case "n":
            var audio = new Audio("sounds/piano-mp3_F4.mp3");
            audio.play();
            break;
        default:

    }
}

function keyAnimation (click){
    var clicked = document.querySelector("." + click);
    clicked.classList.add("press");

    setTimeout(function(){
        clicked.classList.remove("press")
    },100);
}

//music key

function musickeyy (keyy){
    if (keyy ===  "Q" || "q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "W"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
    if (keyy ===  "Q"){
        document.querySelector(".keyb-key").innerHTML = "Q";
        document.querySelector(".mus-key").innerHTML = "G2";
    }
}
