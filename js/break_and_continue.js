


// for (var i = 1; i <= 50; i++) {
//     var userInput = prompt("Pick an odd number between 1 and 50.")
//     if (i % 2 != 0) {
//         console.log("Here is an odd number: " + i);
//     }
//
// }


// # 5
while(isNaN(userNum) || (userNum % 2 ===0) || (userNum < 1) || (userNum > 50))
    var userNum = prompt("Enter a number between 1 and 50.")


// # 5 break and continue


console.log("Number to skip is: " + userNum);

for(var i =1; i < 50; i++) {
    if (i == userNum) {
    console.log("Yikes! Skipping number: ")
    continue;
    } else if (i % 2 === 0) {
        continue;
    } else {
        console.log("Here's an odd number: " + i)
    }
}
