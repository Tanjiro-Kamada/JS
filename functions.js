// let number = number(prompt("Enter a number!!"))

// if (number % 2 ==0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }

// function check_even(){
//     if (number % 2 == 0){
//         console.log("Even");
//     }else{
//         console.log("odd");
//     }
// }

// check_even()

function sum_number(a,b) {
    return a+b
}

let sum1 = sum_number(20,25)
let sum2 = sum_number(6,7)

console.log(sum1)
console.log(sum2)



function checkEligibility(age) {
    if (age >= 18) {
        return "You are eligible to drive.";
    } else {
        return "You are not eligible to drive.";
    }
}

let age = Number(prompt("Enter your age: "));

alert(checkEligibility(age));
