const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Machine Language", correct: false },
      { text: "Hyper Tool Multi Language", correct: false },
      { text: "Home Text Markup Language", correct: false },
    ],
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
    ],
  },
  {
    question: "Which method selects an element by ID?",
    answers: [
      { text: "querySelectorAll()", correct: false },
      { text: "getElementsByClassName()", correct: false },
      { text: "getElementById()", correct: true },
      { text: "createElement()", correct: false },
    ],
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false },
    ],
  },
];

// DOM Elements
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");
const resultElement = document.querySelector("#result");

// Variables
let currentQuestionIndex = 0;
let score = 0;
let quizState = "start";

// Start Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizState = "playing";

  resultElement.textContent = "";
  nextButton.textContent = "Next";

  showQuestion();
}

// Show Question
function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.addEventListener("click", () => {
      selectAnswer(button, answer.correct);
    });

    answerButtons.appendChild(button);
  });
}

// Reset Previous Options
function resetState() {
  answerButtons.innerHTML = "";
  nextButton.disabled = true;
}

// Select Answer
function selectAnswer(selectedButton, isCorrect) {
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  const correctAnswer = questions[currentQuestionIndex].answers.find(
    (answer) => answer.correct,
  );

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;

    if (button.textContent === correctAnswer.text) {
      button.classList.add("correct");
    }
  });

  nextButton.disabled = false;
}

// Show Final Score
function showScore() {
  quizState = "finished";

  answerButtons.innerHTML = "";
  questionElement.textContent = "Quiz Completed!";

  resultElement.textContent = `Your Score: ${score} / ${questions.length}`;

  nextButton.textContent = "Play Again";
  nextButton.disabled = false;
}

// Next Button Event
nextButton.addEventListener("click", () => {
  if (quizState === "start") {
    startQuiz();
  } else if (quizState === "playing") {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      showScore();
    }
  } else if (quizState === "finished") {
    startQuiz();
  }
});

// Initial Screen
nextButton.textContent = "Start Quiz";
nextButton.disabled = false;
