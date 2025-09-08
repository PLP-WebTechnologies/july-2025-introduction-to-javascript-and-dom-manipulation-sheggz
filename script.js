let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let result = document.createElement("P")


if (Number(a) > Number(b)) {
    result.innerText =  "The first number is greater than the second"
    console.log("The first number is greater than the second.");

}

else if (Number(a) < Number(b)){
    result.innerText = "The first number is less than the second"
    console.log("The first number is less than the second.")
}

else if (Number(a) === Number(b)){
    result.innerText = "The first number is equal to the second"
    console.log("The first number is equal to the second.")
}

document.body.appendChild(result);

function addition(num1 =0 , num2=0){
    let output = document.createElement("h4")
    console.log(num1 + num2)
    output.innerText = `The addition of ${num1} and ${num2} is ${num1 + num2}` /*note the use of backticks*/
    document.body.appendChild(output)
    console.log(num1 + num2)
    return num1 + num2
}

let subtraction = (num1 =0 , num2=0) => {
    let output = document.createElement("h4")
    console.log(num1 - num2)
    output.innerText = `The addition of ${num1} and ${num2} is ${num1 - num2}` /*note the use of backticks*/
    document.body.appendChild(output)
    return num1 - num2
}

addition(Number(a), Number(b))
subtraction(Number(a), Number(b))

let greeting = 'Hello World!'
let count = prompt("How many times do you want to see the greeting?");
for (let i = 1; i <= Number(count); i++){
    console.log(greeting);
    let greetOutput = document.createElement("h4")
    greetOutput.innerText = `${i}. ${greeting}`
    document.body.appendChild(greetOutput);
}

