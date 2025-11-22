const args = process.argv.slice(2);
// create Object to store word Frequencies
const wordCounts = {};
// clean input (transform to string and replace characters with whitespace)
const cleanSentence = args
    .join(" ")
    .replace(/[.,!?]/g, " ")
    .toLowerCase();

// Split cleaned sentence into array of words again /\s+/ can be replaced by " " but it doesnt handle any whitespace character (tab, space etc.)
const words = cleanSentence.split(/\s+/).filter((word) => word !== "");

// Validate user Input
if (args.length === 0) {
    console.log("Please provide a sentence.");
    return;
}

//iterate through the Array
for (const word of words) {
    // increment exisiting words by 1
    if (wordCounts[word]) {
        wordCounts[word]++;
        // If it doesn't exist set the wordCount to 1:
    } else {
        wordCounts[word] = 1;
    }
}

console.log(wordCounts);
