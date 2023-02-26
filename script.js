// consts and vars
const userInput = document.getElementById('textbox');
// const words = [page1, page2];
const page1 = {
    french: [
        "&agrave; peu pr&egrave;s",
        "&agrave; propos de",
        "&agrave; travers",
        "abondonner",
        "l'abus de", // m
        "accompagner",
    ],
    english: [
        "approximately",
        "in regards to",
        "through",
        "to abandon",
        "the abuse of",
        "to accompany",
    ]
}
const lang = ["french", "english"] // 0 = french, 1 = english
var langChoose = 0; 

var correctAnswer = "";
var translation = "";

//

if (localStorage.getItem("correct")) {
    var correct = localStorage.getItem("correct");
} else {
    var correct = 0;
}
if (localStorage.getItem("incorrect")) {
    var incorrect = localStorage.getItem("incorrect");
} else {
    var incorrect = 0;
}

//

// functions
userInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
    else if (event.key === "`") {
        langChoose = (langChoose + 1) % 2;
        userInput.value = "";
    }
});

function updateHTML(phrase, lang) {
    document.getElementById("phrase").innerHTML = phrase;
    document.getElementById("lang").innerHTML = lang;
}

function newWord() {
    let x = Math.floor(Math.random()*6);
    let y = (langChoose + 1) % 2; 
    let z = page1[lang[y]][x]; 
    correctAnswer = page1[lang[langChoose]][x];
    updateHTML(z, lang[langChoose]);
}
function onload() {
    document.getElementById("correct").innerHTML = correct;
    document.getElementById("incorrect").innerHTML = incorrect;
    newWord();
}

function checkAnswer() {
    let x = userInput.value;
    userInput.value = "";
    newWord();
    if (x == correctAnswer) {
        correct++;
        document.getElementById("correct").innerHTML = correct;
        localStorage.setItem("correct", correct);
    }
    else {
        incorrect++;
        document.getElementById("incorrect").innerHTML = incorrect;
        localStorage.setItem("incorrect", incorrect);
    }
}