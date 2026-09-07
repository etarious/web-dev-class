// console.log("Working");

// VARIABLES AND DATA TYPES...
// let lastname; // I can define a string and not assign a value to it. It will be undefined.
// lastname = "Doe"; // String

// let firstname = "John"; // String
// firstname = "James"; // It can be itereated (It can be changed)

// const age = 30; // Integer. It was declared as a constant, so it cannot be changed. If you try to change it, it will throw an error.

// // age = 31;

// let x = 5; // Integer. And it is also a number.
// let y = 10;
// let z = x + y;

// let ab = 3.2; // This is a float. It is also a number.

// let bool = true; // This is a boolean. It can either be true or false.

// let by = undefined || null || void // This is an empty value

// console.log(firstname, age);

// // console.log(z);
// console.log(typeof ab);
// console.log(typeof bool);

// console.log(bool);

// console.log(by);



// OPERATORS...


// DECISIONS...
// let x = 1;
// let y = 28;

// if (y/x >= 30) {
//     console.log("Y is greater than or equal to x");
// } else if (y%x == 0) {
//     console.log("Y is divisible by x with a remainder of 0");
// } else {
//     console.log("Y is less than x");
// }

// x+y >= 30 ? console.log("Y is greater than or equal to 30") : console.log("Y is less than 30");

// let weather = "Cloudy";

// switch (weather) {
//     case "Sunny":
//         console.log("It is sunny, You can go out");
//         break;
//     case "Rainy":
//         console.log("It is rainy, take an umbrella");
//         break;
//     case "Cloudy":
//         console.log("It is cloudy, don't go far");
//         break;
//     default:
//         console.log("Weather is unpredictable, stay safe");
// }




// ALERT, CONFIRM AND PROMPT...

// let alertmsg = alert("This is an alert message");
// console.log(alertmsg); 

// let confirmmsg = confirm("DO you want to continue?");
// console.log(confirmmsg);

// let promptmsg = prompt("What is your name?");
// console.log(promptmsg);


// let x = 30;
// let y = 4;

// if (x*y == 100) {
//     x = 50;
// } else {
//     y = 100;
// }

// console.log(x*y);


// LOOPS... 

let x = 0;

while (x <= 10) {
    console.log(x);

    x++;
}

// do {
//     console.log(x);
//     x++;
// } while (x <= 10);