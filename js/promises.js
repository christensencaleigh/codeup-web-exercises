"use strict";

// fetch(url, {headers: {'Authorization': 'token' + githubToken}});
//
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.

function getGithubUsernames() {
	return fetch('https://api.github.com/users')
		.then(response => response.json());

}
console.log("working!!!!")
console.log(getGithubUsernames());

function getLastPush(events) {
	for (let event of events) {
		if (event.type === 'PushEvent') {
			return new Date(event.created_at).toDateString();
		}
	}
	return null;
}

function lastPushDate(username) {
	const url = `https://api.github.com/users/${username}/events`;
	const options = {headers: {'Authorization': 'token ' + githubToken}};
	return fetch(url, options)
		.then(res => res.json())
		.then(getLastPush)
		.catch(console.error);
}

lastPushDate("christensencaleigh").then(console.log);

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the
// passed number of milliseconds. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.
//  */

function wait(numMilliseconds) {
	return new Promise((resolve) => {
		setTimeout(resolve, numMilliseconds)
	});
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));