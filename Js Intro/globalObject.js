// In a normal function call this refers to the global / window object

function fun1()
{
    this.a = 10; // global object mei a variable bn jaayega
    console.log(a); // 10
}

fun1();
console.log(a); // 10 (as a was declared in global object it was still present in the stack after the function was swiped out of stack)

function fun2()
{
    b = 10;   // same as this.a (yaha pr bhi global object mei a bn jaayega)
    console.log(b);
}

fun2();
console.log(b);

function fun3()
{
    let c = 10; // here c is a local variable of function
    console.log(c);
}

fun3();
console.log(c); // error in this line as c was a local variable and was also swipped out of stack with fun3

