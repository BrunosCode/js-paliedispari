// EVEN OR ODD

// 1. the user take a guess, between to string
const userGuess = (guess1, guess2) => {
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
        return userGuess("Even", "Odd");
    }
}
let userGuessedEven = userGuess("Even", "Odd");


// 2. generate a random number 
// 3. sum to numbers
// 4. check if the number is even
// 5. store and comunicate computer's number
// 6. check if the user's is right
// 7. declare the winner
