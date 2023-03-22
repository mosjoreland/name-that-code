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
let questionContentEl = document.querySelector('#question-content')
let timer;
let timeLeft = 60;
let indexOfCurrentQuestion = 0;
let currentQuestion = questions[indexOfCurrentQuestion];
let score = 0;
let savedHighScoreEl;
let inputEl;


// add a function localStorage.setItem that adds HS and Initials to empty array of objects
// use json.parse to read
// use json.stringify to store array
// integrate this line vvv


// [
//     {
//         initial: '',
//         score:''
//     }
// ]
// let scoresHistory = JSON.parse(localStorage.getItem(updateHighScoreLi)) || [];


// function updateHighScoreLi(event) {
//  let tmpScrObj = {
//    score: score,
//    initial: event.target.value
//  };


//  scoresHistory.push(tmpScrObj);


//  localStorage.setItem('scoresHistory', scoresHistory);


// }


// a function that iterates through the questions array with a for loop
function renderNextQuestion() {
 headingEl.innerHTML = '';
 questionContentEl.innerHTML = '';
 // console.log('what is the problem?')
 // after clearing original content this appends a new element with the question content
 let titleEl = document.createElement('h2');
 titleEl.textContent = currentQuestion.title;
 titleEl.setAttribute('style', 'text-align: center;');
 questionContentEl.appendChild(titleEl);
// console.log('is this the problem?')
 for (let i = 0; i < currentQuestion.choices.length; i++) {
   let buttonEl = document.createElement('button');
   buttonEl.setAttribute('class', 'choice');
   // buttonEl.setAttribute('style', 'border-radius: 6px; width: 120px; margin: 10px; display: flex; flex-direction: column;');
   buttonEl.textContent = currentQuestion.choices[i];
   questionContentEl.appendChild(buttonEl);
   // console.log('or is this the problem?')
 }
}


// event that starts the timer and renders next question
startBtnEl.addEventListener('click', function (event) {
 event.preventDefault();
 // console.clear()
// console.log('what is the problem?')
   timer = setInterval(function () {
     timeLeft--;
     timeLeftEl.textContent = timeLeft;
       // console.clear()
       // console.log('is this the problem?')
   if (timeLeft <= 0 || indexOfCurrentQuestion === questions.length) {
     clearInterval(timer);
     timeLeftEl.textContent = 0;
//        console.clear()
// console.log('or is this the problem?')
     questionContentEl.innerHTML = '';
     let headEl = document.createElement('h2');
     headEl.textContent = 'Your Score: '
     headEl.setAttribute('style', 'font-size: 24px display: flex; text-align: center;');
     questionContentEl.appendChild(headEl);


		 let scoreEl = document.createElement('p');
		 scoreEl.setAttribute('style', 'font-size: 26px; text-align: center;')
     scoreEl.textContent = score;
     questionContentEl.appendChild(scoreEl);


     let initialEl = document.createElement('p');
     initialEl.textContent = 'Add your initials to save your new score:';
     inputEl = document.createElement('input');
		 inputEl.setAttribute('type', 'text');
		 inputEl.setAttribute('class', 'input-submit');
		 inputEl.setAttribute('placeholder', 'Enter initials');
		 initialEl.setAttribute('style', 'font-size: 20px; text-align: center;');
		 
     questionContentEl.appendChild(initialEl);
     questionContentEl.appendChild(inputEl);


     let getInputEl = document.createElement('input');
		 getInputEl.setAttribute('type', 'submit');
		 getInputEl.setAttribute('class', 'input-submit');
		 questionContentEl.appendChild(getInputEl);
     getInputEl.addEventListener('click', updateHighScoreLi);
		





   }


   }, 10000);


 renderNextQuestion();
 // console.clear()
 // console.log('are you running?')


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
     renderNextQuestion(currentQuestion = questions[indexOfCurrentQuestion]);
   }
    
   }




});


// add an eventlistener to open the high-score element
// highScoreEl.addEventListener('click', function (event) {
//  event.preventDefault();


//  headingEl.innerHTML = '';
//  questionContentEl.innerHTML = '';
//  highScoreEl.innerHTML = '';


//  savedHighScoreEl = document.createElement('ul');
//  headingEl.appendChild(savedHighScoreEl);


//  for (let i = 0; i < scoresHistory; i++) {
//    let newScoreEl = document.createElement('li');
//    newScoreEl.textContent = updateHighScoreLi.split(',');
//    newScoreEl.setAttribute('style', '');
//    highScoreEl.appendChild(newScoreEl)
//  }


// })




// add a go back button to the high-score element


