const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [ "Who was the first American woman in space? ", "True or false: 5000 meters == 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? " ];
let correctAnswers = [ "Sally Ride", "true", "40", "Trajectory", "3" ];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  for (let i = 0; i < 5; i++){
    candidateAnswers[i] = input.question(questions[i]);
  }

}

function gradeQuiz(candidateAnswers) {
  console.log(
`
Candidate Name: ${candidateName}

1) ${questions[0]}
Your answer: ${candidateAnswers[0]}
Correct answer: ${correctAnswers[0]}

1) ${questions[1]}
Your answer: ${candidateAnswers[1]}
Correct answer: ${correctAnswers[1]}

1) ${questions[2]}
Your answer: ${candidateAnswers[2]}
Correct answer: ${correctAnswers[2]}

1) ${questions[3]}
Your answer: ${candidateAnswers[3]}
Correct answer: ${correctAnswers[3]}

1) ${questions[4]}
Your answer: ${candidateAnswers[4]}
Correct answer: ${correctAnswers[4]}`
  );

  let correctCount = 0;
  let quizTotal = 5;
  for (let i = 0; i < 5; i++){
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
      correctCount++;
    }
  }
  
  let grade = correctCount / quizTotal * 100;
  let passFail = "";
  if(grade < 80){
    passFail = "FAILED";
  } else{
    passFail = "PASSED";
  }

  console.log(
`
>>> Overall Grade: ${grade}% (${correctCount} of ${quizTotal} responses correct) <<<
>>> Status: ${passFail} <<<`
);

  return grade;
}

function runProgram() {
  askForName();
  console.log("Greetings, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};