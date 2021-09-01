// EVEN OR ODD

// 1. the user take a guess, between to string
const userGuessTheFirst = (guess1, guess2) => {
    let userChoise = prompt(`Choose! ${guess1} or ${guess2}?`).toLowerCase();
    // if the user chooses the first string, return true
    if ( userChoise === guess1.toLowerCase() ) {
        return true;
    // if the user chooses the second string, return false
    } else if ( userChoise === guess2.toLowerCase() ) {
        return false;
    // if the user chooses is not valid repeat 
    } else { 
        alert("Invalid choice");
        return userGuessTheFirst(guess1, guess2);
    }
}

// 2. user number
const userChoosenNumber = (min, max) => {
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
const sum = (num1, num2) => {
    let sum = num1 + num2;
    if (isNaN(sum)) {
        console.log("sum is not a number");
    }
    return sum;
}

// 5. check if the number is even
const isEven = (num) => {
    if (num % 2 == 0) {
        return true;
    } else if (num % 2) {
        return false;
    } else if (isNaN(num)) {
        console.log("I can't check a NaN");
    }
}

// start button
document.getElementById("start").addEventListener("click", () => {
    // 6. store user's guess, computer's and user's number
    let userGuessedEven = userGuessTheFirst("Even", "Odd");
    console.log(`userGuessedEven ${userGuessedEven}`);

    let userNumber = userChoosenNumber(1,5);
    console.log(`userNumber ${userNumber}`);

    let computerNumber = randomNumber(1,5);
    console.log(`computerNumber ${computerNumber}`);

    let sumIsEven = isEven(sum(userNumber, computerNumber));
    console.log(`sumIsEven ${sumIsEven}`);
    
    // 7. check if the user's is right
    if (userGuessedEven == sumIsEven) {
        alert("You have won");
    } else if (userGuessedEven != sumIsEven) {
        alert("You have lost");
    } else {
        alert("Error");
    }
})
