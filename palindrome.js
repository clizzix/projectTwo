// create Function to check if the string is a palindrome
const isPalindrome = (text) => {
    // convert to lowercase and remove all ambiguous characters to make the comparison robust
    const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    // reverse Text to compare it to the clean Text
    // --> Split returns an Array of single letters
    // --> reverse the array
    // --> join it back together
    const reversedText = cleanText.split("").reverse().join("");
    // compare original and reversed Text
    return cleanText === reversedText;
};

// Function to run CLI
const palindromeCheck = () => {
    // join at " " to avoid inconsistencies becaus of white space
    const input = process.argv.slice(2).join(" ");

    if (!input) {
        console.log("Please enter text.");
        console.log("Usage: node palindrome.js <word_or_phrase>");
        return;
    }

    const result = isPalindrome(input);

    if (result) {
        console.log("Palindrome.");
    } else {
        console.log("Not a palindrome.");
    }
};

palindromeCheck();
