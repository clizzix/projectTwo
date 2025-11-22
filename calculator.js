const args = process.argv.slice(2);
let num1 = parseFloat(args[0]);
let num2 = parseFloat(args[2]);
let operator = args[1];
let result = 0;

// Check for the correct number of arguments
if (args.length !== 3) {
    console.log("Usage: node calculator.js <number1> <operator> <number2>");
    console.log("Example: node calculator.js 5 + 3");
    return;
}

// Validate operator and Num1 and Num2

if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "/" &&
    operator !== "*"
) {
    console.log("Invalid operator. USe +, -, * or /");
} else if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter a Number.");
}

// Calculator Logic

if (operator === "+") {
    result = num1 + num2;
    console.log(`Your result is ${result}`);
} else if (operator === "-") {
    result = num1 - num2;
    console.log(`Your result is ${result}`);
} else if (operator === "*") {
    result = num1 * num2;
    console.log(`Your result is ${result}`);
} else if (operator === "/") {
    if (num1 === 0 || num2 === 0) {
        console.error("You cannot divide by 0!");
    } else {
        result = num1 / num2;
        console.log(`Your result is ${result}`);
    }
}
