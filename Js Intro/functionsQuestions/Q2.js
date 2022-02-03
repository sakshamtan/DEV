
var fun = function()
{
    gun();
}

fun(); // gun is undefined till this line so again error that gun is not a function

var gun = function()
{
    console.log("I am inside gun");
}