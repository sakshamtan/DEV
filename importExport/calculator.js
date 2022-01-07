function add(a,b)
{
    console.log('The sum is :',a + b);
}

function sub(a,b)
{
    console.log('The subtraction is :',a - b);
}

function mul(a,b)
{
    console.log('The multiplication is :',a * b);
}

function div(a,b)
{
    console.log('The division is :',a / b);
}

module.exports = {
    addition : add,
    subtraction : sub,
    multiplication : mul,
    division : div
}

//module.exports is an Object provided by Node.js by which we can export our functions in key value pairs
//We will use the functions by the keys we have assigned to them