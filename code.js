var startQuiz = document.getElementById("startQuiz");
var begin = document.getElementById("begin");
var enterYourScore = document.getElementById("enterYourScore")
var submit = document.getElementById("submit");
var name = document.getElementById("yourName");
var pennedHighScores = document.getElementById("pennedHighScores");
//questions
var questionsBox = document.getElementById("questionsBox");
var titles = document.getElementById("titles");
var choiceA = document.getElementById("buttonA");
var choiceB = document.getElementById("buttonB");
var choiceC = document.getElementById("buttonC");
var choiceD = document.getElementById("buttonD");
var buttonEl = document.querySelector("#choice");
//Questiosn box invisble until start is pressed
questionsBox.style.display = "none";
enterYourScore.style.display = "none";
pennedHighScores.style.display = "none";
//click start button, then questions will appear and timer will start
startQuiz.addEventListener("click", function () {
    begin.style.display = "none";
    timeLeft();
    promptQuestions();
});

i = 0;

function promptQuestions(event) {
    if (i < questions.length) {
    questionsBox.style.display = "block";
    titles.textContent = questions[i].title;
    choiceA.textContent = questions[i].choices[0];
    choiceB.textContent = questions[i].choices[1];
    choiceC.textContent = questions[i].choices[2];
    choiceD.textContent = questions[i].choices[3];
}

else {
    
    enterScore();
}
}
 var timer = 75;
function nextQuestion (event) {
    if (i < questions.length) {
        i++;
        // promptQuestions();
    }
}

function timeLeft() {
    var time = document.getElementById("timer");
    var outOfTime = setInterval(function () {
        timer--;
        time.textContent = ("Time: " + timer);
        if (timer === 0) {
            clearInterval(outOfTime)
            alert('Times up!! You should consider studying more.');
            enterScore();
        }
    }, 1000)
}

questionsBox.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var choice = element.textContent
        console.log(choice);
        // promptQuestions();


        if (choice == questions[i].answer) {
             alert("Great Job :)");
             // promptQuestions();
             nextQuestion();
         }
         else {
             alert("Wrong Answer :(")
             timer = timer - 10
            // promptQuestions();
            nextQuestion();
        }
        promptQuestions();
    }
    
})
function enterScore() {
    questionsBox.style.display = "none";
    enterYourScore.style.display = "block";
    document.getElementById("yourScore").value = timer;
}
function submitScore() {
    localStorage.setItem("user", user);
    var user = {
        username: name,
        highScore: timer,
    };
    console.log(user);
};
function highScoreBtn() {
    begin.style.display = "none";
    enterYourScore.style.display = "none";
    pennedHighScores.style.display = "block";
}

