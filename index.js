// JS for Multiplication App. Multiplies two numbers within the range of 10
// Resets the score if Reset Score button is pressed. It also resets scores when the browser is reloaded or closed.

// generate random number between 1 and 10
// The Math.ceil () function always rounds a number up to the next largest integer
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

// Set score value to local storage at the beginning
// JSON.parse changes string to number
// let score = JSON.parse(localStorage.getItem("score"));
let score = JSON.parse(sessionStorage.getItem('score'));

if(!score){
    score = 0;
              
}

// Updating score using innerText
scoreEl.innerText = `score: ${score}`;

// Generating question randomly
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

// Correct Answer
const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    // + changes string to number
    if(userAns === correctAns){
        // Increase score value by 1
        score++;
        // update the local storage
        updateLocalStorage();
    }else{
        score--;
        // update the local storage
        updateLocalStorage();
    }

})

// Updating local storage using JSON
function updateLocalStorage(){
    // localStorage.setItem("score", JSON.stringify(score));
    sessionStorage.setItem('score', JSON.stringify(score));
}

// Reset the score
function resetScore(){  
    let data = sessionStorage.getItem('score')
        if(score != 0){
            // resets the current score
            data = 0;
            // Clears the memory to ZERO
            score = 0;
        }
   // Updates the score after resetting it to ZERO
    scoreEl.innerText = `score: ${score}`;
         
  }   
//   Reset the score to ZERO when browser window is closed or re-loaded
sessionStorage.removeItem("score");

