// Export these function for testing
export function sum(a, b) {
	return a + b;
}

export function divide(a, b) {
	return a / b;
}

function fetchApi(url) {
	return fetch(url, {
		// headers: {}
	}).then((res) => res.json());
}

/**
 * Fetches the gender for a given name using the Genderize API.
 *
 * @param {string} name - The name to get the gender for.
 * @returns {Promise<'female'|'male'|null>} - A promise that resolves to the gender if found, otherwise null.
 */
async function getGender(name) {
	try {
		const data = await fetchApi(`https://api.genderize.io/?name=${name}`);
		return data.gender;
	} catch (err) {
		// handle error
		console.error(err);
	}
}
/**
 * Logs a greeting message for a given name.
 *
 * @param {string} name - The name of the person to greet.
 * @param {'female'|'male'|null} gender - The greeting message to log.
 * @param {string} message - The greeting message to log.
 * @returns {string}
 */
export function generateGreeting(name, gender) {
	return gender
		? `Hello, ${name}!, based on the name, I think you are a ${gender}.`
		: `Hello, ${name}!, I'm not sure what your gender is.`;
}

// Run the function on load
async function run() {
	const name = "John";
	const gender = await getGender("John");
	const greeting = generateGreeting(name, gender);
	console.log(greeting);
}

run();