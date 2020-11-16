var theAvengersSix = ['Iron Man', 'Captain America', 'Thor Odinson', 'The Hulk', 'Black Widow', 'Spiderman'];

for (var i = 0; i < theAvengersSix.length; i++) {
    console.log(theAvengersSix[i]);
}

theAvengersSix.forEach(function (avenger) {
    console.log(avenger + " is the strongest superhero in the Marvel Universe.")
})

function countTimer(num) {
    var start = Date.now();
    console.log("Counting from 1 to " + num);
    for (var i=1;i<num;i++) {
        //just counting
    }
}
    var end = Date.now();
    console.log("Done!");
    console.log("It took " + (end - start) + " milliseconds");