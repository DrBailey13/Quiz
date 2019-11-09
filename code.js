var startQuiz = document.getElementById("startQuiz");
var begin = document.getElementById("begin");

var questionsBlue = document.getElementById("questionsBox");
var titles = document.getElementById("titles");
var choiceA = document.getElementById("buttonA");
var choiceB = document.getElementById("buttonB");
var choiceC = document.getElementById("buttonC");
var choiceD = document.getElementById("buttonD");
var buttonEl = document.querySelector("#choice");

questionsBox.style.visibility = "hidden";


var timer = 76;

startQuiz.addEventListener("click", function () {
    begin.style.display = "none";
    timeLeft();
    promptQuestions();
});


function promptQuestions() {
    questionsBox.style.visibility = "visible";
    titles.textContent = questions[i].title;
    choiceA.textContent = questions[i].chocies[0];
    choiceB.textContent = questions[i].chocies[1];
    choiceC.textContent = questions[i].chocies[2];
    choiceD.textContent = questions[i].chocies[3];
}

function timeLeft() {
    var time = document.getElementById("timer");
    setInterval(function () {
        timer--;
        time.textContent = ("Time:" + timer);

    }, 1000)

}

i = 0

function nextQuestion(event){
    var answer = buttonEl.textContent;
    console.log(answer);
    if (i < questions.length) {
        i++;
        promptQuestions()
    }
}