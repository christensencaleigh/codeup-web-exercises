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





