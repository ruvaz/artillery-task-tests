'use strict';

module.exports = {
	generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
	// generate data with Faker:
	const taskName = `${Faker.lorem.words()}`;
	userContext.vars.taskName = taskName;
	return done();
}
