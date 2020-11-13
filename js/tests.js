//console.log(returnYellow());

//build a function that returns the string yellow

//verify that we built a function called returnYellow
if(typeof returnYellow === "function") {
    console.log("It is a function.")
} else {
    console.log("It is not a function")
}
//OR

if (typeof returnYellow !== "function") {
    console.error("returnYellow is not a function");
}

// if (typeof returnYellow !== "yellow") {
//     console.error("returnYellow does not return the string");
//     console.error(returnYellow() + " returned instead");
// }
//
// describe("returnYellow", function(){
//     it('should be a defined function', function () {
//         expect(typeof returnYellow).toBe('function');
//     });
//     it("should return 'yellow'", function(){
//         expect(returnYellow()).toBe("yellow");
//     });
// });