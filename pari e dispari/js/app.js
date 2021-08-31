// EVEN OR ODD

// 1. the user take a guess, between to string
const userGuessTheFirst = (guess1, guess2) => {
    let userChoise = prompt(`Choose! ${guess1} or ${guess2}?`).toLowerCase();
    // if the user choose the first string, return true
    if ( userChoise === guess1.toLowerCase() ) {
        return true;
    // if the user choose the second string, return false
    } else if ( userChoise === guess2.toLowerCase() ) {
        return false;
    // if the user choose is not valid repeat 
    } else { 
        alert("Invalid choice");
        return userGuessTheFirst(guess1, guess2);
    }
}
// let userGuessedEven = userGuessTheFirst("Even", "Odd");

// 2. user number
const userChooseANumber = (min, max) => {
    let userNumber = parseInt(prompt(`Choose a number between ${min} and ${max}`))
    if ( !isNaN(userNumber) && userNumber >= min && userNumber <= max ) {
        return userNumber;
    } else {
        alert("Invalid number");
        return userChooseANumber(min, max);
    }
}

// 3. generate a random number, between a min and a max value
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 4. sum to numbers
// 5. check if the number is even
// 6. store and comunicate computer's number
// 7. check if the user's is right
// 8. declare the winner
