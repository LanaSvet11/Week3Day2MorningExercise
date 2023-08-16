// Function 1: Add two numbers
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

// Function 2: Check if a number is even or odd
const checkEvenOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// Function 3: Calculate the factorial of a number
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Function 4: Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

// Function 5: Generate a random number within a range
const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
