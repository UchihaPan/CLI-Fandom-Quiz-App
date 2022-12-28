var readlineSync = require("readline-sync");

var score = 0;




var questions = [{
  question: "What is the name of Thor’s hammer?",
  answer: "Mjolnir"
}, {
  question: "What is Captain America’s shield made of? ",
  answer: "Vibranium"
},
 {
  question: "What is the real name of the Black Panther? ",
  answer: "T'Chaka"
},
 {
  question: "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet? ",
  answer: "Loki"
},
{
  question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
  answer: "J.A.R.V.I.S."
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Hey " + userName + " Lets play Marvel Quiz!");
}



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }


  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showscores() {
  console.log("YAY! Your total score is: "+ score + "out of 5");

}


welcome();
game();
showscores();