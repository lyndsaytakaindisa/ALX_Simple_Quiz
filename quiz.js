function checkAnswer(){ // function declaraction
    let correctAnswer = "4"; // identify the correct answer
    let answer   =document.querySelector("input[name='quiz']:checked"); // retrieve the user's answer 
    userAnswer = answer.value ;
    if (userAnswer === correctAnswer){ // copmare the user's answer with the correct answer 
        document.getElementById("feedback").textContent="Correct! Well done." 
    }
    else{
         document.getElementById("feedback").textContent="That's incorrect. Try again!"
    }
}

document.getElementById("submit-answer").addEventListener("click" ,checkAnswer) // add an event listener to the submit button 