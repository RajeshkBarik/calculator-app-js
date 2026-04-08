// Simple Calculator Functionality in JavaScript

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Example usage:
console.log("Addition: ", add(2, 3));
console.log("Subtraction: ", subtract(5, 2));
console.log("Multiplication: ", multiply(3, 4));
console.log("Division: ", divide(10, 2));
