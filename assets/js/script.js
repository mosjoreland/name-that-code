let questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['A: strings', 'B: booleans', 'C: alerts', 'D: numbers'],
    answer: 'C: alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['A: quotes', 'B: curly brackets', 'C: parentheses', 'D: square brackets'],
    answer: 'C: parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: ['A: numbers and strings', 'B: other arrays', 'C: booleans', 'D: all of the above'],
    answer: 'D: all of the above',
  },
  {
    title: 'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['A: commas', 'B: curly brackets', 'C: quotes', 'D: parentheses'],
    answer: 'C: quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['A: JavaScript', 'B: terminal / bash', 'C: for loops', 'D: console.log'],
    answer: 'D: console.log',
  },
];

let timeLeftEl = document.querySelector('#timer');
let headingEl = document.querySelector('#heading');
let startBtnEl = document.querySelector('#start');
let highScoreEl = document.querySelector('#high-score');
let questionContentEl = document.querySelector('#question-content');
let timer;
let timeLeft = 60;
let indexOfCurrentQuestion = 0;
let currentQuestion = questions[indexOfCurrentQuestion];
let score = 0;
let savedHighScoreEl;
let inputEl;
let newScore = localStorage.getItem(score);


let scoresHistory = JSON.parse(localStorage.getItem('scoresHistory')) || [];

// a function that iterates through the questions array with a for loop
function renderNextQuestion() {
  headingEl.innerHTML = '';
  questionContentEl.innerHTML = '';
  // after clearing original content this appends a new element with the question content
  let titleEl = document.createElement('h2');
  titleEl.textContent = currentQuestion.title;
  titleEl.setAttribute('style', 'text-align: center;');
  questionContentEl.appendChild(titleEl);
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    let buttonEl = document.createElement('button');
    buttonEl.setAttribute('class', 'choice btn btn-success mb-2');
    let breakEl = document.createElement('div');
    breakEl.setAttribute('class', 'w-100 d-none d-md-block');
    buttonEl.textContent = currentQuestion.choices[i];

    questionContentEl.appendChild(buttonEl);
    questionContentEl.appendChild(breakEl);
  }
}

// event that starts the timer and renders next question
startBtnEl.addEventListener('click', function (event) {
  event.preventDefault();

  timer = setInterval(function () {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;

    if (timeLeft <= 0 || indexOfCurrentQuestion === questions.length) {
      clearInterval(timer);
      timeLeftEl.textContent = 0;

      questionContentEl.innerHTML = '';
      let headEl = document.createElement('h2');
      headEl.textContent = 'Your Score: ';
      headEl.setAttribute('style', 'font-size: 24px display: flex; text-align: center;');
      questionContentEl.appendChild(headEl);

      let scoreEl = document.createElement('p');
      scoreEl.setAttribute('style', 'font-size: 26px; text-align: center;');
      scoreEl.textContent = score;
      questionContentEl.appendChild(scoreEl);

      let initialEl = document.createElement('p');
      initialEl.textContent = 'Add your initials to save your new score:';
      inputEl = document.createElement('input');
      inputEl.setAttribute('type', 'text');
      inputEl.setAttribute('id', 'initial');
      inputEl.setAttribute('placeholder', 'Enter initials');
      initialEl.setAttribute('style', 'font-size: 20px; text-align: center;');
      let break2El = document.createElement('div');
      break2El.setAttribute('class', 'w-100 d-none d-md-block');
      questionContentEl.appendChild(initialEl);
      questionContentEl.appendChild(inputEl);
      questionContentEl.appendChild(break2El);

      let saveInputEl = document.createElement('button');
      saveInputEl.setAttribute('class', 'btn btn-danger');
      saveInputEl.textContent = 'Save high score!';
// storing input in localstorage on click event
      saveInputEl.addEventListener('click', function updateHighScoreLi() {
        let tmpScrObj = {
          score: score,
          initial: inputEl.value,
        };

        scoresHistory.push(tmpScrObj.score);
        scoresHistory.push(tmpScrObj.initial);

        localStorage.setItem('scoresHistory', JSON.stringify(scoresHistory));

      });
      questionContentEl.appendChild(saveInputEl);
    }
  }, 1000);

  renderNextQuestion();
});

// event that takes user through questions as they click on the choices
questionContentEl.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.matches('.choice')) {
    if (currentQuestion.answer === event.target.textContent) {
      score += 1;
    } else {
      timeLeft -= 10;
    }
    indexOfCurrentQuestion += 1;
    if (indexOfCurrentQuestion < questions.length) {
      renderNextQuestion((currentQuestion = questions[indexOfCurrentQuestion]));
    }
  }
});

// add an eventlistener to open the high-score element
highScoreEl.addEventListener('click', function (event) {
  event.preventDefault();

  headingEl.innerHTML = '';
  questionContentEl.innerHTML = '';
  highScoreEl.textContent = '';
  timeLeftEl.textContent = '';

  backBtn = document.createElement('button');
  backBtn.classList.add('btn', 'btn-primary');
  backBtn.textContent = 'Back';
  headingEl.appendChild(backBtn);
// takes user back to start page on click
  backBtn.addEventListener('click', function () {
    window.location.reload();
  });

  savedHighScoreEl = document.createElement('ul');
  headingEl.appendChild(savedHighScoreEl);

  for (let i = 0; i < scoresHistory.length; i++) {
    let newScoreEl = document.createElement('li');
    newScoreEl.textContent = scoresHistory[i];
    newScoreEl.setAttribute('style', 'font-size: 20px; text-align: center;');
    savedHighScoreEl.appendChild(newScoreEl);
  }
});

