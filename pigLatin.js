const vowels = ['a', 'e', 'i', 'o', 'u'];
const suffixAy = 'ay';
const suffixWay = 'way';

const pigLatinTranslation = (str) => {
    if (!str) {
        return 'Please Enter a string';
    }

    const lowerWord = str.toLowerCase();
    if (vowels.includes(lowerWord[0])) {
        return str + suffixWay;
    }

    
    let firstVowelIndex = -1;
    for (let i = 0; i < lowerWord.length; i++) {
        if (vowels.includes(lowerWord[i])) {
            firstVowelIndex = i;
            break;
        }
    }
    if (firstVowelIndex === -1) {
        return str + suffixAy;
    }

    const consonantCluster = str.substring(0, firstVowelIndex);
    const remainingWord = str.substring(firstVowelIndex);

    return remainingWord + consonantCluster + suffixAy;
};

function main() {
    const englishPhrase = process.argv[2];
    if (!englishPhrase) {
        console.error(
            'Error: Please provide an English phrase as a commandline argument.'
        );
        console.log('Example: node pigLatin.js "Pig Latin is hard to speak"');
        return;
    }
    const words = englishPhrase.split(/\s+/);
    const pigLatinWords = words.map((word) => {
        return pigLatinTranslation(word);
    });

    const pigLatinPhrase = pigLatinWords.join(' ');

    console.log(pigLatinPhrase);
}

main();
