fun(); // error -> gun is not a function

function fun()
{
    gun();
}

var gun = function()
{
    console.log("I am inside gun");
}