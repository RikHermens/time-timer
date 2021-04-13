const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const charlieOne = document.getElementById("charles1");
const charlieTwo = document.getElementById("charles2");
const charlieThree = document.getElementById("charles3");
const charlieFour = document.getElementById("charles4");

let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");

const bark = document.querySelector(".bark")

//store a reference to variable
let startTimer = null;


function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) { //zodat timer niet onder de 0 komt.
        h.value = 0;
        m.value = 0;
        s.value = 0;
        bark.play();
        charlieOne.classList.add("hidecharlie"); //zorgt ervoor dat afb 1, dan 2, dan 3, dan 4 getoont wordt.
        charlieTwo.classList.remove("hidecharlie");
        setTimeout(function () {
            charlieTwo.classList.add("hidecharlie");
            charlieThree.classList.remove("hidecharlie");
            setTimeout(function () {
                charlieThree.classList.add("hidecharlie");
                charlieFour.classList.remove("hidecharlie");
            }, 2000);
        }, 3500);

        stopTimer();
    } else if (s.value != 0) { //als niet alles 0 is, seconde eraf tellen
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0) {
        m.value = 59;
        s.value = 59;
        h.value--;
    }
    return
}

function stopTimer() {
    clearInterval(startTimer);
    startTimer = null;
}

start.addEventListener("click", function () {
    //init var startTimer, iedere 1000ms, 1s roept hij timer functie
    if (startTimer != null || (h.value == 0 && m.value == 0 && s.value == 0)) {
        return
    }
    function startInterval() {
        startTimer = setInterval(function () {
            timer();
        }, 1000)
    }
    startInterval();
    console.log(startTimer);

})



reset.addEventListener("click", function () {
    h.value = 0; //value linkt aan html inputfield
    m.value = 0;
    s.value = 0;
    charlieOne.classList.remove("hidecharlie");
    charlieTwo.classList.add("hidecharlie");
    charlieThree.classList.add("hidecharlie");
    charlieFour.classList.add("hidecharlie");
    stopTimer();
})