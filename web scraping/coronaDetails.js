const request = require('request');
const cheerio = require('cheerio');

console.log('Before');

request("https://www.worldometers.info/coronavirus/", cb) 

function cb(error, response, html)
{
    if(error)
    {
        console.error(error);
    }
    else{
        handleHtml(html);
    }
}

function handleHtml(html)
{
    // in selector tool we are getting the whole html of the website 
    let selTool = cheerio.load(html); // html request ne generate kra hai and cheerio ne us html pe kaam kia

    let contentArr = selTool('.maincounter-number span'); // css selectors se select kr rhe hai the content that we want; multiple data hai from same selector so array mei input ki form mei aayega

    // for(let i = 0; i < contentArr.length; i++)
    // {
    //     let data = selTool(contentArr[i]).text();
    //     console.log('data:', data);
    // }

    let totalCases = selTool(contentArr[0]).text();
    let totalDeaths = selTool(contentArr[1]).text();
    let totalRecoveries = selTool(contentArr[2]).text();

    console.log('Total Cases:', totalCases);
    console.log('Total Deaths:', totalDeaths);
    console.log('Total Recoveries:', totalRecoveries);

}

console.log('After');