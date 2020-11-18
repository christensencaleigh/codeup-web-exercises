(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var person = {
        firstName: "Caleigh",
        lastName: "Christensen"
    }
    console.log(person.firstName);
    console.log(person.lastName);

    person.sayHello = function() {
        return "Hello from, " + this.firstName + " " + this.lastName + "!";
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180}, //before 180 and does not get a discount
        {name: 'Ryan', amount: 250}, //before 250, does get a discount, and after is 220
        {name: 'George', amount: 320} //before 320, does get a discount, and after is
    ];
    console.log(shoppers)



    // function finalTotals(shopper) {
    //
    //     if (shopper.amount > 200) {
    //        return "You are eligible for a discount of: " + shopper.amount * .12;
    //    } else {
    //        return "Not eligible for discount."
    //    }
    // }
    // console.log(finalTotals(shoppers[0]));


    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            console.log("Hello there, " + shopper.name + "! Your total before any discounts is $ " + shopper.amount.toFixed(2) + ". since that's over $200, you will be receiving a 12% discount, meaning your final total is $ " + (shopper.amount * .88).toFixed(2) + ".")
            return shopper.name + ", " + shopper.amount + ", " + shopper.amount * .12 + ", "
        } else {
            return "Not eligible for discount."
        }
    })






    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"

    }
        }
    ]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();