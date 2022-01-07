const request = require('request');

console.log('Before');

request("https://www.worldometers.info/coronavirus/", cb) // link se uska html code utha kr laata hai (async function)

function cb(error, response, html)
{
    console.error('error:', error); // Print the error if occured
    console.log('statusCode:', response && response.statusCode); // Print the response code if a response was received
    console.log('html', html); // Print the HTML for the worldometer website
}

console.log('After');
