// Get the users input
const input = process.argv.slice(2).join("");

let reversedPhrase = [];

if (input === "") {
    console.log("Please enter text.");
}

// Loop backwards from the last character to the first
for (let j = input.length - 1; j >= 0; j--) {
    reversedPhrase.push(input[j]);
}
console.log(input);
console.log(reversedPhrase.join(""));

// Check if the Phrases / Words are matching

if (input.toLowerCase() === reversedPhrase.join("").toLowerCase()) {
    console.log("Palindrome.");
} else {
    console.log("Not a palindrome.");
}
