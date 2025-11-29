// alphabets boundaries
const alphabetSize = 26;
const lowerA = 'a'.charCodeAt(0);
const lowerZ = 'z'.charCodeAt(0);

function encryptChar(char, shift) {
    const originalCharCode = char.charCodeAt(0);

    // Check if the character is an English letter (A-Z or a-z)

    if (originalCharCode >= lowerA && originalCharCode <= lowerZ) {
        // It's a lowercase letter

        // Convert the carachter code to a 0-25 index
        const charIndex = originalCharCode - lowerA;

        // Apply the shift
        const shiftedIndex = (charIndex + shift) % alphabetSize;
        const normalizedIndex = (shiftedIndex + alphabetSize) % alphabetSize;

        const newCharCode = normalizedIndex + lowerA;

        return String.fromCharCode(newCharCode);
    }

    return char;
}

function main() {
    const phrase = process.argv[2];
    const shiftStr = process.argv[3];

    if (!phrase || !shiftStr) {
        console.error(
            'Error: Please provide both a phrase and a shift number.'
        );
        return;
    }
    const shift = parseInt(shiftStr, 10);

    if (isNaN(shift)) {
        console.error('Error: the shift value must be a number.');
        return;
    }

    const lowerPhrase = phrase.toLowerCase();

    let encryptedPhrase = '';
    for (const char of lowerPhrase) {
        encryptedPhrase += encryptChar(char, shift);
    }
    console.log(encryptedPhrase);
}

main();
