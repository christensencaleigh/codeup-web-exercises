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

//setting up a loop for iterating through my arrays

function getLang(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		newArr.push(arr[i])
	}
	return newArr.join('')
}


// FILTER - LANGUAGES***

let filterLang = users.filter(function (user) {
	return getLang(user.languages.length) >= 3;
})
console.log(filterLang)




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
	return total += user.yearsOfExperience / users.length;
}, 0)
// console.log(totalYears);

//rewrite using ES6
let totalYearsES6 = users.reduce((total, user) => total += user.yearsOfExperience / users.length, 0)
console.log(totalYearsES6);


// REDUCE - LONGEST EMAIL***

let longEmail = users.reduce(function (total, user) {
	return total += user.email.length
}, 0)
// console.log(longEmail);



// REDUCE - LIST NAMES IN A SINGLE STRING
let newArr = [];
let listNames = users.reduce(function (total, user) {
	return newArr += user.name
}, 0)
console.log(listNames);



