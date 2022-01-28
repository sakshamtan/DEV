// Predict the output ->

// Memory allocation for the functions are done before the code is executed
// Functions are created in heap and there addresses are stored in stack
// There is no function overloading in javascript

console.log("Script Started");
iamReal();

// 1
function iamReal()
{
    console.log("I am real");
}

iamReal();

// 2
function iamReal()
{
    console.log("He isn't -> I am real");
}

iamReal();

// Note -> Compiler first allocates memory for the functions and then runs the codes of script line by line
// So iamReal function ki memory pehle allocate hogyi and then vo function update bhi hogya 2nd function se
// So iamReal() updated function hi call krega har baar

