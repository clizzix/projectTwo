// Generates a random integer between 1 and 100 (inclusive)
const secretNumber = 46;

function playGame() {
    const args = process.argv.slice(2);
    // Check for input
    if (args.length === 0) {
        console.log("Please provide a guess in the command line!");
        console.log("Type: node numberGuessingGame.js <your_guess>");
        console.log("The number is between 1 and 100 (inclusive)");
    }
    // Extract input from the array and parse it to an int
    const input = args[0];
    const guess = parseInt(input);

    // Validate input
    if (isNaN(guess)) {
        console.log("Invalid input. Please enter a number!");
        return;
    }
    if (guess < 1 || guess > 100) {
        console.log("Your guess must be between 1 and 100!");
    }

    if (guess === secretNumber) {
        console.log("Congratulations! You guessed the number!");
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guess > secretNumber) {
        console.log("Too high! Try again.");
    }
}

playGame();
