const args = process.argv.slice(2);

const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
let userCount = 0;
let compCount = 0;

// Extract the user's choice from the arguments array
const userChoice = args[0];

// Validate user input
if (args.length !== 1) {
    console.error(
        "Please provide exactly one argument: 'rock', 'paper', or 'scissors'!"
    );
} else if (!choices.includes(userChoice.toLowerCase())) {
    console.error(
        `Invalid choice: "${userChoice}". Please choose 'rock', 'paper', or 'scissors'.`
    );
} else {
    // proceed with the game logic.
    console.log(`You chose: ${userChoice.toLowerCase()}`);
    console.log(`Computer chose: ${computerChoice}`);

    const userChoiceLower = userChoice.toLowerCase();

    if (userChoiceLower === computerChoice) {
        console.log("Tie!");
    } else if (userChoiceLower === "rock" && computerChoice === "scissors") {
        console.log("You win!");
        userCount += 1;
        console.log(`Your Count is: ${userCount}`);
    } else if (userChoiceLower === "rock" && computerChoice === "paper") {
        console.log("You loose!");
        compCount += 1;
        console.log(`User Count: ${userCount} vs Computer Count: ${compCount}`);
    } else if (userChoiceLower === "paper" && computerChoice === "rock") {
        console.log("You win!");
        userCount += 1;
        console.log(`Your Count is: ${userCount}`);
    } else if (userChoiceLower === "paper" && computerChoice === "scissors") {
        console.log("You loose!");
        compCount += 1;
        console.log(`User Count: ${userCount} vs Computer Count: ${compCount}`);
    } else if (userChoiceLower === "scissors" && computerChoice === "paper") {
        console.log("You win!");
        userCount += 1;
        console.log(`Your Count is: ${userCount}`);
    } else if (userChoiceLower === "scissors" && computerChoice === "rock") {
        console.log("You loose!");
        compCount += 1;
        console.log(`User Count: ${userCount} vs Computer Count: ${compCount}`);
    }
}
