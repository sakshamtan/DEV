// Highest wicket taker from scorecard on espn cricinfo website
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");

console.log('Before');

request(url,cb);

function cb(err, response, html) 
{
    if (err) 
    {
        console.log(err);
    } 
    else
    {
        handleHTML(html);
    }
}

function handleHTML(html)
{
    let $ = cheerio.load(html);
    let teamsArr = $('.match-info-MATCH.match-info-MATCH .team');
    // console.log($(teamsArr).text()); // teams aur unka score saath aarha tha

    let wTeamName; // winning team name

    for(let i = 0; i < teamsArr.length; i++)
    {
        let hasClass = $(teamsArr[i]).hasClass("team-gray"); // team with class team-gray is the loosing team
        if(hasClass == false)
        {
            let teamNameEle = $(teamsArr[i]).find('.name'); // .name class mei team ka naam hai
            wTeamName = teamNameEle.text().trim();
        }
    }
    console.log(wTeamName);

    let inningsArr = $('.card.content-block.match-scorecard-table>.Collapsible');
    let htmlStr = '';

    for(let i = 0; i < inningsArr.length; i++)
    {
        let cHtml = $(inningsArr[i]).html(); // cHtml -> current html 
        htmlStr += cHtml; // sirf innings ka html bnaa ke alag file mei copy paste krne ke liye taaki css selectors select krne mei asaani rahe.

        let teamNameElem = $(inningsArr[i]).find('.header-title.label');

        let teamName = teamNameElem.text();
        // console.log(teamName);
        teamName = teamName.split('INNINGS')[0].trim();
        console.log(teamName);

        let hwtName = '';
        let hwt = 0;

        if(wTeamName == teamName)
        {
            let tableElem = $(inningsArr[i]).find(".table.bowler");
            let allBowlers = $(tableElem).find('tr');

            for(let j = 0; j < allBowlers.length; j++)
            {
                let allColOfPlayers = $(allBowlers[j]).find('td');
                let playerName = $(allColOfPlayers[0]).text();
                let wickets = $(allColOfPlayers[4]).text();
                
                if(wickets >= hwt)
                {
                    hwt = wickets;
                    hwtName = playerName;
                }
            }

            console.log('Highest wicketTaker is', hwtName, 'with', hwt, 'wickets');
        }

    }
    // console.log(htmlStr); // htmlStr pasted in table.html file

}

console.log('After');

