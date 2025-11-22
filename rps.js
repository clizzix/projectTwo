const args = process.argv.slice(2);
console.log(args);

const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);

if (args.length != 1 || typeof args != "string") {
    console.error(
        "Choose only one of the following items: 'rock', 'paper' or 'scissors'!"
    );
}
