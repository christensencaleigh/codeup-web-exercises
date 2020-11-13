// #1 Create a function named showMultiplicationTable that accepts
// a number and console.logs the multiplication table for that
// number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    for (var i = 1; i < 11; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

showMultiplicationTable(7);

// #2 Use a for loop and the code from the previous lessons to generate
// 10 random numbers between 20 and 200 and output to the console
// whether each number is odd or even



for (var i = 0; i < 10; i++) {
    var random = Math.floor(Math.random() * (200 - 20) +20)
    if(random % 2 === 0) {
        console.log(random + " is even.")
    } else {
        console.log(random + " is odd.")
    }
}

// #3 Create a for loop that uses console.log to create
// the output shown on exercise


// #4

// function countDownByFive(num) {
//     for (var i = 100; i > 5; i - 5) {
//         console.log(num);
//     }
// }

//countDownByFive(5);

// #5