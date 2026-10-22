// number 1

function triangleArea(base, height) {
    return (base * height) / 2;
}

let base = Number(prompt("Enter the base of the triangle:"));
let height = Number(prompt("Enter the height of the triangle:"));

let area = triangleArea(base, height);

console.log("The area of the triangle is: " + area);

//  number 2

function checkNumber(number) {
    if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }

    if (number % 4 === 0) {
        return "divisible by 4";
    }
    
    return "";
}

let number = Number(prompt("Enter a number:"));

let result = checkNumber(number);

if (result !== "") {
    console.log(result);
}
// number 3

function validatePhone(phone) {
    if (phone.startsWith("+254")) {
        return phone;
    } else if (phone.startsWith("07")) {
        return "+254" + phone.slice(1);
    } else if (phone.startsWith("01")) {
        return "+254" + phone.slice(1);
    } else if (phone.startsWith("7")) {
        return "+254" + phone;
    } else if (phone.startsWith("1")) {
        return "+254" + phone;
    } else if (phone.startsWith("254")) {
        return "+" + phone;
    } else {
        return "Invalid phone number";
    }
}

let phone = prompt("Enter your phone number:");

console.log(validatePhone(phone));

// number 4

function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "Valid email";
    } else {
        return "Invalid email";
    }
}

let email = prompt("Enter your email:");

console.log(validateEmail(email));

// number 5

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

console.log("The largest number is: " + findLargest(num1, num2, num3));

// number 6

function checkPassword() {
    let correctPassword = "admin@123";

    for (let attempts = 1; attempts <= 4; attempts++) {
        let password = prompt("Enter your password:");

        if (password === correctPassword) {
            console.log("Access granted!");
            return;
        } else {
            console.log("Incorrect password. Attempts used: " + attempts);
        }
    }

    console.log("Account blocked!");
}

checkPassword();



