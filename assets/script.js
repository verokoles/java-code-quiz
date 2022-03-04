var timerEl = document.getElementById('countdown');
var beginButtonEl = document.getElementById('generate');
var containerEl = document.querySelector('container');
var counterEl = 
//setinterval, settimeout
var view = 'begin'; 
var 
function beginPage {

}

function quizPage() {}

function resultPage() {}

//step 1
beginButtonEl.onlick = function() {
    containerEl.innerHTML = beginPage();
    quizPage();
    startTimer();
}


//Step 2
// // ceate function for timer
function startTimer() {
    var counterTimer = setInterval(() => {
        counter -= 1;
        // update the counter to page
        counterEl.innerHTML = counter;

        if (counter === 0) {
            // is it finished ?
            clearInterval(counterTimer);
            containerWl.innerHTML = resultPage();
        }
        

    }, 1000);
}

function generateQuiz(questions, quizContainer, results, submit)

//questions and answers 
// 1. An event that is fired when an element has lost focus:
    // A. focus
    // B. blur   **
    // C. focus in
    // D. focus out

// 2. What symbol is used to break the script in JS to pseudocode?
    // A. /*
    // B. //    **
    // C <-->
    // D. {}

// 3. What's true of undefined values and undefined variables in JavaScript?
    // A. undefined is an example of a keyword
    // B. they are variables with a value
    // C. if an undefined variable is read, an undefined value is returned   **
    // D. if an undefined variable is read, a defined value is returned

// 4. What are global variables?
    // A. variables avaiable throughout the code with no scope   **
    // B. class names
    // C. another name for keyword 'this'
    // D. a type of event listener

// 5. An event that is fired when a pointing device (e.g.,a mouse) 
// is pressed and released on a single element? 
    // A. context menu
    // B. click
    // C. onclick
    // D. both B and C   **

   /* // when a user clicks on any of questions 
    //check to see if the answer is correct or not
    // if its wrong, take away 10 seconds
    // counter-=10;

    /*