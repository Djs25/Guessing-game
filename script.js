function startGame(){
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let maxAttempts = 3;
    for(let i = 0; i < maxAttempts; i++){
        const userInput = prompt(`Attempt ${i + 1}: Guess a number between 1 and 10`);
        if( userInput === null){
            alert("Game cancelled.");
            return;
        }
        let userGuess = Number(userInput);
        
        if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
            alert("Invalid input! Please enter a number between 1 and 10.");
            i--;
            continue;
        }
        if(userGuess === randomNumber){
            alert("Congratulations! You guessed the number!");
            return;
        } else if(userGuess < randomNumber){
            alert("Too low! Try again.");
        } else if(userGuess > randomNumber){
            alert("Too high! Try again.");
        }
        else{
            alert("Invalid input! Please enter a number between 1 and 10.");
        }
    }
    alert(`Game Over! You've used all your attempts. The correct number was ${randomNumber}.`);
}   