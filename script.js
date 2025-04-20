const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Saturn", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is the capital of Kenya?",
    options: ["Lagos", "Nairobi", "Accra", "Kigali"],
    answer: "Nairobi"
  },
  {
    question: "How many seconds in a minute?",
    options: ["60", "45", "30", "90"],
    answer: "60"
  }
];

let currentQuestion = 0;
let timer;
let timeLeft = 10;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const startBtn = document.getElementById("startBtn");
const timerEl = document.getElementById("timer");

startBtn.addEventListener("click", startGame);

function startGame() {
  startBtn.style.display = "none";
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.answer) {
    alert("Correct! 🎉");
  } else {
    alert("Wrong 😢");
  }
  nextQuestion();
}

function nextQuestion() {
  clearInterval(timer);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    timeLeft = 10;
    loadQuestion();
    startTimer();
  } else {
    questionEl.textContent = "Game Over! Thanks for playing.";
    optionsEl.innerHTML = "";
    timerEl.textContent = "";
  }
}

function startTimer() {
  timerEl.textContent = `⏳ ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏳ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      nextQuestion();
    }
  }, 1000);
}
const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Saturn", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is the capital of Kenya?",
    options: ["Lagos", "Nairobi", "Accra", "Kigali"],
    answer: "Nairobi"
  },
  {
    question: "How many seconds in a minute?",
    options: ["60", "45", "30", "90"],
    answer: "60"
  }
];

let currentQuestion = 0;
let timer;
let timeLeft = 10;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const startBtn = document.getElementById("startBtn");
const timerEl = document.getElementById("timer");

startBtn.addEventListener("click", startGame);

function startGame() {
  startBtn.style.display = "none";
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.answer) {
    alert("Correct! 🎉");
  } else {
    alert("Wrong 😢");
  }
  nextQuestion();
}

function nextQuestion() {
  clearInterval(timer);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    timeLeft = 10;
    loadQuestion();
    startTimer();
  } else {
    questionEl.textContent = "Game Over! Thanks for playing.";
    optionsEl.innerHTML = "";
    timerEl.textContent = "";
  }
}

function startTimer() {
  timerEl.textContent = `⏳ ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏳ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      nextQuestion();
    }
  }, 1000);
}
