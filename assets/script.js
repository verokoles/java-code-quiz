var timerEl = document.getElementById('countdown');
var beginButtonEl = document.getElementById('generate');
var containerEl = document.querySelector('container');
var counterEl = document.getElementById('counter');


var counter = 60;
var correctAnswers = 0;
var wrongAnswers = 0;

var quizCount = 0;

//setinterval, settimeout
var view = 'begin'; // quiz, results, begin



function beginPage() {
    return beginPageTemplate;

}
//Step 1
beginButtonEl.onlick = function () {
    containerEl.innerHTML = beginPage();
    quizPage();
    startTimer();
}

//Step 2
function quizPage() {
    containerEl.innerHTML = generateQuiz();
    generateQuiz();
}


// Step 3
function startTimer() {
    var counterTimer = setInterval(() => {
        counter -= 1;
        // update the counter to page
        counterEl.innerHTML = counter;
        // stop counter if it reaches 0
        if (counter === 0) {
            // is it finished ?
            clearInterval(counterTimer);
            container.innerHTML = resultPage();
        }
        console.log("Counter:", counter);

    }, 1000);
}
//Step 4
function resultPage() {
    containerEl.innerHTML = `
 <h1>Reult Page</h1>
 <p>Correct Answer: ${correctAnswers}</p>
 <p>Wrong Answer: ${wrongAnswers}</p>
        `;
}
//quiz questions and answers
const quizzes = [
    {
        title: "1. An event that is fired when an element has lost focus: ",
        choices: [
            "A) focus",
            "B) blur",
            "C) focus in",
            "D) focus out"
        ],
        correctChoice: 0
    },
    {
        title: "2. What's true of undefined values and undefines variables in JavaScript?",
        choices: [
            "A) undefined is an example of a keyword",
            "B) they are variables with a value",
            "C) if an undefined variable is read, an undefined value is returned",
            "D) if an undefined variable is read, a defined value is returned"
        ],
        correctChoice: 0
    },
    {
        title: "3. What symbol is used to break the script in JS to pseudocode?",
        choices: [
            "A) /*",
            "B) //",
            "C) <-->",
            "D) {}"
        ],
        correctChoice: 0
    },
    {
        title: "4. An event that is fired when a pointing device (e.g.,a mouse) is pressed and released on a single element?",
        choices: [
            "A) context menu",
            "B) click",
            "C) onclick",
            "D) both B and C"
        ],
        correctChoice: 0
    },
    {
        title: "5. what are global variables?",
        choices: [
            "A) context menu",
            "B) click",
            "C) onclick",
            "D) both B and C"
        ],
        correctChoice: 0
    }
];

// when a user clicks on any of questions 
//check to see if the answer is correct or not
// if its wrong, take away 10 seconds
// counter-=10;

function generateQuiz(questions, quizContainer, results, submit) {

    const currentQuiz = quizzes[quizCount];

    const quiz = `
          <h2>${currentQuiz.title}</h2>
        <p>A) ${currentQuiz.choices[0]}</p>
        <p>B) ${currentQuiz.choices[1]}</p>  
        <p>C) ${currentQuiz.choices[2]}</p> 
        <p>D) ${currentQuiz.choices[3]}</p> 
    `;

    return quiz;

}