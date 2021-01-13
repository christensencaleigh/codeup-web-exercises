"use strict";

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];



// FILTER - LANGUAGES

let filterLang = users.filter(function (user) {
	return user.languages.length >= 3;
});
// console.log(filterLang)

//rewrite using ES6
let filterLangES6 = users.filter(user => user.languages.length  >= 3);
console.log(filterLangES6);


// MAP - EMAIL ADDRESSES

let userEmails = users.map(function (user) {
	return user.email;
})
// console.log(userEmails)

// rewrite using ES6
let userEmailsES6 = users.map(user => user.email);
console.log(userEmailsES6)


// REDUCE - AVERAGE YEARS OF EXPERIENCE

let totalYears = users.reduce(function (total,user) {
	return total + user.yearsOfExperience / users.length;
}, 0)
// console.log(totalYears);

//rewrite using ES6
let totalYearsES6 = users.reduce((total, user) => total + user.yearsOfExperience / users.length, 0)
console.log(totalYearsES6);


// REDUCE - LONGEST EMAIL***
let hugeEmail = users.reduce(function (currentLongest,thisUser) {
	if (thisUser.email.length > currentLongest.email.length) {
		//this will return a value to reassign 'currentLongest'
		return thisUser;
	} else {
		//this means that the user being looked at right now does NOT have a longer email then the running champ above
		return currentLongest;
	}
}, users[0])
console.log("The user with the hugest email is: " + hugeEmail.email);

//rewrite using ES6
let longestEmailUser = users.reduce((currentLongest, user) => user.email.length > currentLongest.email.length ? user : currentLongest, users[0])
console.log(longestEmailUser.name + " has the longest email address.");

// REDUCE - LIST NAMES IN A SINGLE STRING***
let newArr = [];
let userNames = users.reduce(function (listOfNames, user) {
	return newArr += user.name
}, 0)

console.log(userNames);

// let userNames = users.reduce((listOfNames, user) => )

