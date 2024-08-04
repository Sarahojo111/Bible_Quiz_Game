const questions = [
  {
    question: "Who says in his heart there is no God?",
    answers: [
      { text: "A. The devil", correct: false },
      { text: "B. The Leper", correct: false },
      { text: "C. The Fool", correct: true },
      { text: "D. Judas", correct: false },
      { text: "E. The david", correct: false },
    ],
  },
  {
    question:
      "According to psalm 121, we can be secure in God's protection because God never does what?",
    answers: [
      { text: "A. Sleep", correct: true },
      { text: "B. Run", correct: false },
      { text: "C. Fight", correct: false },
      { text: "D. Eat", correct: false },
      { text: "E. Bless", correct: false },
    ],
  },
  {
    question: "Who went with moses to confront pharaoh?",
    answers: [
      { text: "A. Joseph", correct: false },
      { text: "B. Abraham", correct: false },
      { text: "C. Aaron", correct: true },
      { text: "D. Jethro", correct: false },
      { text: "E. Samuel", correct: false },
    ],
  },
  {
    question:
      "Who  did jesus drive out of the temple because they were not treating it as a house of prayer?",
    answers: [
      { text: "A. Chief priest", correct: false },
      { text: "B. Pharisees", correct: false },
      { text: "C. Teachers of the law", correct: false },
      { text: "D. Marchants", correct: true },
      { text: "E. Disciples", correct: false },
    ],
  },
  {
    question: "What did Ezra preprare his heart to do?",
    answers: [
      { text: "A. To face his enemies", correct: false },
      { text: "B. To go into the king's presence", correct: false },
      { text: "C. To seek, do and teach the law of God", correct: true },
      { text: "D. To give food to the orphans", correct: false },
      { text: "E. To go up to the temple in jerusalem", correct: false },
    ],
  },
  {
    question: "What can hold water, according to the lord, in jeremiah?",
    answers: [
      { text: "A. False god's promises", correct: false },
      { text: "B. Rivers", correct: false },
      { text: "C. The hands of the priest", correct: false },
      { text: "D. Cisterns", correct: true },
      { text: "E. Basket", correct: false },
    ],
  },
  {
    question:
      "According to the gospel of Mark, what powers did Jesus give to his apostles when he ordained them?",
    answers: [
      { text: "A. To heal and to speak in tongus", correct: false },
      {
        text: "B. To speak in tongues and to walk on the water",
        correct: false,
      },
      { text: "C. To heal and to cast out demons", correct: true },
      { text: "D. To cast out demons and speak in tongues", correct: false },
      { text: "E. To fight evil people", correct: false },
    ],
  },
  {
    question:
      "Jabez prayed that the God of isreal would bless him and expand his borders. What did God do?",
    answers: [
      { text: "A. Ignore him", correct: false },
      { text: "B. Killed him", correct: false },
      { text: "C. Made him king", correct: false },
      { text: "D. Granted his request", correct: true },
      { text: "E. Butcher him", correct: false },
    ],
  },
  {
    question: "Who is the forerunner of Jesus christ",
    answers: [
      { text: "A. Isaiah", correct: false },
      { text: "B. Jude", correct: false },
      { text: "C. John the baptized", correct: true },
      { text: "D. Zachariah", correct: false },
      { text: "E. Solomon", correct: false },
    ],
  },
  {
    question: "God change Saul to -----?",
    answers: [
      { text: "S. Paul", correct: true },
      { text: "B. Peter", correct: false },
      { text: "C. Paulinah", correct: false },
      { text: "D. Potter", correct: false },
      { text: "E. Philip", correct: false },
    ],
  },
];

const questionEle = document.querySelector(".question");
const answerButtons = document.querySelector(".answerbutton");
const nextButton = document.querySelector(".nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next Question";
  showQuestion();
}

function showQuestion() {
  resetQuestion();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionEle.innerHTML = questionNumber + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", chooseAnswer);
  });
}

function resetQuestion() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function chooseAnswer(e) {
  const selectedBtn = e.target;
  const correctAnswer = selectedBtn.dataset.correct === "true";
  if (correctAnswer) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetQuestion();
  questionEle.innerHTML = ` You scored  ${score}/${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function gotoNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    gotoNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
