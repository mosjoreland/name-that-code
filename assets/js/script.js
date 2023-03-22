let timeLeftEl = document.querySelector('#timeLeft');
let questionContentEl = document.querySelector('#question');
let instructionEl = document.querySelector('#instruction');
let startBtnEl = document.querySelector('#start');
let highScoreEl = document.querySelector('#high-scores');
let timer;
let timeLeft = 60;
let indexOfCurrentQuestion = 0;
let score = 0;
let savedHighScoreEl;
let inputEl;
//let scoresHistory = JSON.parse(localStorage.getItem(scoresHistory)) || [];


// list of all questions, choices, and answers

let questions = [
	{
		title: 'Commonly used data types DO NOT include:',
		choices: ['A: strings', 'B: booleans', 'C: alerts', 'D: numbers'],
		answer: 'alerts',
	},
	{
		title: 'The condition in an if / else statement is enclosed within ____.',
		choices: ['A: quotes', 'B: curly brackets', 'C: parentheses', 'D: square brackets'],
		answer: 'parentheses',
	},
	{
		title: 'Arrays in JavaScript can be used to store ____.',
		choices: ['A: numbers and strings', 'B: other arrays', 'C: booleans', 'D: all of the above'],
		answer: 'all of the above',
	},
	{
		title: 'String values must be enclosed within ____ when being assigned to variables.',
		choices: ['A: commas', 'B: curly brackets', 'C: quotes', 'D: parentheses'],
		answer: 'quotes',
	},
	{
		title:
			'A very useful tool used during development and debugging for printing content to the debugger is:',
		choices: ['A: JavaScript', 'B: terminal / bash', 'C: for loops', 'D: console.log'],
		answer: 'console.log',
	},
];

// add a function localStorage.setItem that adds HS and Initials to empty array of objects
// use json.parse to read
// use json.stringify to store array
// integrate this line vvv
// let highScores = JSON.parse(localStorage.getItem(scoreHistory)) || [];
// [
//     {
//         initial: '',
//         score:''
//     }
// ]

// function updateHighScores(event) {
// 	let tmpScrObj = {
// 		score: score,
// 		initial: event.target.value
// 	};

// 	scoresHistory.push(tmpScrObj);

// 	localStorage.setItem('scoreHistory', scoresHistory);

// }

function renderNextQuestion() {
	instructionEl.innerHTML = '';
	let currentQuestion = questions[indexOfCurrentQuestion];

	questionContentEl.textContent = currentQuestion.title;

	for (let i = 0; i < currentQuestion.choices.length; i++) {
		let buttonEl = document.createElement('button');
		buttonEl.setAttribute('class', 'choice');
		buttonEl.setAttribute('class', 'btn btn-primary');
		buttonEl.setAttribute('style', 'padding: 3px');
		buttonEl.textContent = currentQuestion.choices[i];
		instructionEl.appendChild(buttonEl);
	}
}

startBtnEl.addEventListener('click', function (event) {
    event.preventDefault();

		timer = setInterval(function () {
			timeLeft--;
      timeLeftEl.textContent = timeLeft;
        
		if (timeLeft <= 0 || indexOfCurrentQuestion === questions.length) { 
			clearInterval(timer);
			timeLeftEl.textContent = 0;
			

			// questionContentEl.innerHTML = ''

			questionContentEl.innerHTML = '';
			let titleEl = document.createElement('h2');
			titleEl.textContent = 'Your Score: '
			titleEl.setAttribute('style', 'font-size: 24px');
			questionContentEl.appendChild(titleEl);

			let scoreEl = document.createElement('p');
			scoreEl.textContent = score;
			questionContentEl.appendChild(scoreEl);

			let initialEl = document.createElement('p');
			initialEl.textContent = 'Add your initials to save your new score:';
			inputEl = document.createElement('input');
			inputEl.setAttribute('text', 'input[name="initials"]');
			questionContentEl.appendChild(initialEl);
			questionContentEl.appendChild(inputEl)

			buttonEl.innerHTML = '';
		}

    }, 1000);

    renderNextQuestion();

});


// let currentScore = 0;
// when the user clicks on a choice button
// let currentScore = [];
instructionEl.addEventListener('click', function (event) {
    let currentQuestion = questions[indexOfCurrentQuestion]

    event.preventDefault();

    if (event.target.matches('.choice')) {
      	console.log('Correct!');
        console.log();

    if (event.target.textContent === currentQuestion.answer) {
// increase the current score	
			// currentScore++;

    } else {
            timeLeft -= 10;
    }

        currentQuestion = questions[indexOfCurrentQuestion++]
        renderNextQuestion();
    }


});