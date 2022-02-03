// fun was undefined till line 2 so we got fun is not a function error
fun();  // only variables are hoisted in function expression

var fun = function()
{
    gun()
}

var gun = function()
{
    console.log("I am inside gun");
}