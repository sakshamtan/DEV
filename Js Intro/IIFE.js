// Activity using IIFE 
// 1) On page load display a prompt asking the user for the x time
// 2) console.log the couting of time like (10, 9, 8, 7, 6, ..., 0 secs)
// 3) Display an alert saying Counted x seconds

(function()
{
    let timeUnits = parseInt(prompt("Please input the time in seconds"));
    let interval = parseInt(prompt("Log after how much interval?"));

    // calls the handleCalls function after every interval (passed as milliseconds)
    let intervalId = setInterval(handleCalls, interval * 1000);
    // returns an id used to stop calling via clearInterval function

    // functions can be used as a store of properties (similar to objects)
    handleCalls.orgTimeUnit = timeUnits;

    function handleCalls()
    {
        console.log(timeUnits + " left");
        timeUnits -= interval;

        if(timeUnits == 0)
        {
            clearInterval(intervalId);
            alert(handleCalls.orgTimeUnit + " has been counted.");
        }
    }
})();