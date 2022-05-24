var timerEl = document.getElementById('countdown');
var beginButtonEl = document.getElementById('generate');
var containerEl = document.querySelector('.container');
var counterEl = document.getElementById('counter');
console.log(containerEl);
//create submit button variable
var submitButtonEl = document.getElementById('submit');
var quizButtonEl = document.querySelector('.quiz-button');

// restart quiz button variable
var restartButtonEl = document.getElementById('restart');
//next page button
// var nextButtonEl = document.getElementById('next'); 

//create counter variable
var counter = 120;
var correctAnswers = 0;
var wrongAnswers = 0;
var scores = [
    
];

if (!scores?.length) {
    scores =JSON.parse(localStorage.getItem("scores"));
    console.log("Scores: ", scores);
}

var counterTimer;



submitButtonEl.onclick = highestScorePage;


var currentQuiz = {};


var quizCount = 0;


function resetQuiz() {

    counter = 120;
    correctAnswers = 0;
    wrongAnswers = 0;
    scores = [];
    currentQuiz = {};
    quizCount = 0;
    clearInterval(counterTimer)
    

}

function beginPage() {
    console.log(beginPageTemplate);
    return beginPageTemplate;

}
//Step 1
beginButtonEl.onclick = startQuiz;

//Step 2
function quizPage() {
    containerEl.innerHTML = generateQuiz();
    
}



// // next page button to go next 
// nextButtonEl.onclick = function () {
//     containerEl.innerHTML = generateQuiz();
//     quizPage();
// }
//submit the quiz
function resultPage() {

    clearInterval(counterTimer);
    console.log(submitPageTemplate);
    var page =  `
    <h1>Result Page</h1>
    <p>Username: ${username}</p>
    <p>Correct Answer: ${correctAnswers}</p>
    <p>Wrong Answer: ${wrongAnswers}</p>
    <h2>High Scores</h2>
    <p>Log your initials to save restartQuizhigh score!</p>
    <button id="score">See highest score</button>
    <button id="restartQuiz">Restart Quiz</button>


 `;

    containerEl.innerHTML = page;
   }

function highestScorePage() {

    var page = document.createElement("div");
    var orderListEl = document.createElement("ol");
    for (var i = 0; i < scores?.length; i++) {
       var scoreEl = document.createElement("li");
       scoreEl.textContent = "Username: " + scores[i].username + "  score: " + scores[i].score;
        page.appendChild(scoreEl)        
    }

    var buttonEl = document.createElement("button")
        buttonEl.setAttribute("id", "restartQuizOnResultPage")
        buttonEl.textContent = "Restart Quiz";

    console.log("Page: ", page);

    page.appendChild(orderListEl)
    page.appendChild(buttonEl)

    containerEl.innerHTML = "";

    containerEl.appendChild(page)
   }


//setinterval, settimeout
// Step 3
function startTimer() {
    counterTimer = setInterval(() => {
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
function generateQuestion() {
 // const quizzes(0);
}

//Start quiz
function startQuiz() {
    containerEl.innerHTML = beginPage();
    resetQuiz();
    quizPage();
    startTimer();
}


function restartQuiz() {
    return `
 <h1>High Scores</h1>
 <p>Correct Answer: ${correctAnswers}</p>
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
        correctChoice: 1
    },
    {
    
        title: "2. What's true of undefined values and undefined variables in JavaScript?",
        choices: [
            "undefined is an example of a keyword",
            "they are variables with a value",
            "if an undefined variable is read, an undefined value is returned",
            "if an undefined variable is read, a defined value is returned"
        ],
        correctChoice: 2
    },
    {
        title: "3. What symbol is used to break the script in JS to pseudocode?",
        choices: [
            "/*",
            "//",
            "<-->",
            "{}"
        ],
        correctChoice: 1
    },
    {
        title: "4. An event that is fired when a pointing device (e.g.,a mouse) is pressed and released on a single element?",
        choices: [
            "context menu",
            "click",
            "onclick",
            "both B and C"
        ],
        correctChoice: 3
    
    },
    {
        title: "5. What are global variables?",
        choices: [
            "variables avaiible through the code with no scope",
            "another name for keyword 'this'",
            "class names",
            "types of event listeners"
        ],
        correctChoice: 0
    }
];

// choices[3]

// when a user clicks on any of questions 
//check to see if the answer is correct or not
// if its wrong, take away 10 seconds
// counter-=10;

function generateQuiz(questions, quizContainer, results, submit) {

    if (quizzes.length > quizCount) {
        currentQuiz = quizzes[quizCount]; // 0, 1, 2, 3, 4
        var choices = currentQuiz.choices;
    
    
    
        var quiz = `
              <h2>${currentQuiz.title}</h2>
            <button data-value="${choices[0]}" class="quiz-button">A) ${choices[0]}
            <button data-value="${choices[1]}" class="quiz-button">B) ${choices[1]}  
            <button data-value="${choices[2]}" class="quiz-button">C) ${choices[2]} 
            <button data-value="${choices[3]}" class="quiz-button">D) ${choices[3]} 
        `;
    
        // TODO - attach the event directly through the node
    
        return quiz;
    }

  

}


console.log("Quiz Button: ", quizButtonEl);


function nextQuestion () {
    quizCount++;
    quizPage();
}

document.onclick = function(event) {
    var targetEl = event.target;

    if (targetEl.getAttribute("class") === "quiz-button") {
       handleQuiz(targetEl)
    }

    if (targetEl.getAttribute("id") === "restartQuiz" || targetEl.getAttribute("id") === "restartQuizOnResultPage") {
        startQuiz()
     }

    if (targetEl.getAttribute("id") === "score") {
        highestScorePage();
    }
};


function handleQuiz(targetEl) {
    var userSelection =  targetEl.getAttribute("data-value");
    var answer = currentQuiz.correctChoice; // 0
    var choices = currentQuiz.choices;

    var correctAnswer = choices[answer];

    console.log("Quiz: ", currentQuiz);
    // We're checking for correct/wrong answr
    if (userSelection ===correctAnswer ) {
        // alert("Yayyy");
       
        correctAnswers++;
        nextQuestion()
    } else {
        wrongAnswers++;
        // alert("Nooo!!!");
        nextQuestion()
    }


    if (quizCount <= 4 ) {
        // TODO - what you want to handl ehere
        
       
    } else {
        // TODO - Save user to local storage
        username = prompt("Enter your username")

        scores.push({
            username: username,
            score: correctAnswers
        });
        localStorage.setItem("scores", JSON.stringify(scores))
        resultPage();
    }
}



