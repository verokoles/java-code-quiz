var timerEl = document.getElementById('countdown');
var beginButtonEl = document.getElementById('generate');
var containerEl = document.querySelector('.container');
var counterEl = document.getElementById('counter');
console.log(containerEl);

var counter = 120;
var correctAnswers = 0;
var wrongAnswers = 0;

var quizCount = 0;

//setinterval, settimeout
var view = 'begin'; // quiz, results, begin

function beginPage() {
    console.log(beginPageTemplate);
    return beginPageTemplate;

}
//Step 1
beginButtonEl.onclick = function () {
    containerEl.innerHTML = beginPage();
    quizPage();
    startTimer();
    console.log("text");
}

//Step 2
function quizPage() {
    containerEl.innerHTML = generateQuiz();
    
}


// Step 3
function startTimer() {
    var counterTimer = setInterval(() => {
        --counter;
        // update the counter to page
        counterEl.innerHTML = counter;
        // stop counter if it reaches 0
        if (counter === 0) {
            // is it finished ?
            clearInterval(counterTimer);
            containerEl.innerHTML = resultPage();
        }
        console.log("Counter:", counter);
        
    }, 1000);
}
//Step 4
function resultPage() {
    return `
 <h1>Result Page</h1>
 <p>Correct Answer: ${correctAnswers}</p>
 <p>Wrong Answer: ${wrongAnswers}</p>
        `;
}
//quiz questions and answers
const quizzes = [
    {
        title: "1. An event that is fired when an element has lost focus: ",
        choices: [
            "focus",
            "blur",
            "focus in",
            "focus out"
        ],
        correctChoice: 0
    },
    {
        title: "2. What's true of undefined values and undefines variables in JavaScript?",
        choices: [
            "undefined is an example of a keyword",
            "they are variables with a value",
            "if an undefined variable is read, an undefined value is returned",
            "if an undefined variable is read, a defined value is returned"
        ],
        correctChoice: 0
    },
    {
        title: "3. What symbol is used to break the script in JS to pseudocode?",
        choices: [
            "/*",
            "//",
            "<-->",
            "{}"
        ],
        correctChoice: 0
    },
    {
        title: "4. An event that is fired when a pointing device (e.g.,a mouse) is pressed and released on a single element?",
        choices: [
            "context menu",
            "click",
            "onclick",
            "both B and C"
        ],
        correctChoice: 0
    },
    {
        title: "5. what are global variables?",
        choices: [
            "variables avaiible through the code with no scope",
            "another name for keyword 'this'",
            "class names",
            "types of event listeners"
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