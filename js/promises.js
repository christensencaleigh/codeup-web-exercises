"use strict";

// fetch(url, {headers: {'Authorization': 'token' + githubToken}});
//
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.

function getGithubUsernames() {
	return fetch('https://api.github.com/users')
		.then(response => response.json());

}
// console.log("working!!!!")
// console.log(getGithubUsernames());
