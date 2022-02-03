// Both variables and functions are hoisted(memory allocation) in case of function declaration
fun();

function fun()
{
    gun();
}

function gun()
{
    console.log("I am inside gun");
}
