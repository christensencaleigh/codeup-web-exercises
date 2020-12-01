//Prompt the user for what their favorite season is, alert them with a specific message.
//First use a if else statement

// var favSeason = prompt("What is your favorite season?")
//
// if (favSeason === 'spring') {
//     console.log("Spring, the flowers are blooming!");
// } else if (favSeason === 'winter') {
//     console.log("Winter, the snow is falling!")
// } else if (favSeason === 'fall') {
//     console.log("Fall, the leaves are falling!")
// } else if ()
// else {
//     console.log("Fall, the leaves are falling!")
// }

//Try the same  using a switch statement
var favSeason = prompt("What is your favorite season?")

switch (favSeason)  {
    case 'spring' :
        console.log("Spring, the flowers are blooming!");
        break;
    case 'winter' :
        console.log("Winter, the snow is falling!");
        break;
    case 'fall' :
        console.log("Fall, the leaves are falling!");
        break;
    case 'summer' :
        console.log("Summer, warm and sunny!");
        break;
    default :
        console.log("Invalid season.");
}

//Make a function to figure out how many monitors are needed for an office (assuming the office is like a grid. use
// rows and columns. let it be 4 and 5
function monitorCount(rows, columns) {
    return rows * columns;
}
const numOfMonitors = monitorCount(4, 5);
console.log(numOfMonitors)

//Make helper function to calculate the cost of the monitors

function costOfMonitors(rows, columns) {
    return monitorCount(rows,columns) * 200;
}
const totalCost = costOfMonitors(5, 4)
console.log(totalCost)

//Make a function named `parseNumber` that parses (converts) a numeric String and returns it's value as a number.
function parseNumber(input) {
    return parseFloat(input);
}
console.log(parseNumber('1 year old'));

console.log("Testing string comparison to number in console.")


//Create a nested loop that iterates through bobsFollowers as the array for the outer loop and marys Followers as the
// array for the inner loop. If the current element from the outer loop is the same as the current element from
// the inner loop, push that element into the mutualFollowers array.

let bobsFollowers = ['Joe', 'Bill', 'Ted', 'Jim'];
let marysFollowers = ['Bill', 'Sam', 'Ted'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < marysFollowers.length; j++) {
        if (bobsFollowers[i] === marysFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

