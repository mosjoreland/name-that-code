let timeLeftEl = document.querySelector('#timeLeft');
let headingEl = document.querySelector('#question');
let contentEl = document.querySelector('#instruction');
let startBtnEl = document.querySelector('#start');
let timer;

// list of all questions, choices, and answers

let questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 'all of the above',
  },
  {
    title:
      'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title:
      'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

let timeLeft = 60;
let indexOfCurrentQuestion = 0;

function renderNextQuestion() {
    contentEl.innerHTML = '';
    let currentQuestion = questions[indexOfCurrentQuestion];

    headingEl.textContent = currentQuestion.title;
    

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let buttonEl = document.querySelector('button');
        buttonEl.setAttribute('class', 'choice')
        buttonEl.textContent = currentQuestion.choices[i];
        contentEl.appendChild(buttonEl);
    }
}

startBtnEl.addEventListener('click', function (event) {
  event.preventDefault();

  timer = setInterval(function () {
    console.log('Timer started!');
  }, 1000);
})