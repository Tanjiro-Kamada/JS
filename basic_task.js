// 1.Write a program that prompts the user to enter the base and height of a triangle and returns its area.

let base = Number(prompt("Enter the base of the triangle:"));
let height = Number(prompt("Enter the height of the triangle:"));

let area = 0.5 * base * height;

console.log("The area of the triangle is: " + area);

// 2.Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
//  Hint: how does an even / odd number react differently when divided by 2?
// If the number is a multiple of 4, print out “divisible by 4”.

let number = Number(prompt("Enter a number:"));

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

if (number % 4 === 0) {
  console.log("divisible by 4");
}
