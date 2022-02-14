// Predict the output
a = 100;
b = 200;
c = 300;

function fun()
{
    console.log(this.a + " " + this.b + " " + this.c);
}

let obj = {
    a : 10,
    b : 20, 
    c : 30,
    fun1 : function()
    {
        console.log(this.a + " " + this.b + " " + this.c);
    },
    fun2 : fun,
    fun3 : () => { // arrow function this is unpredicatable in arrow functions so avoid using this in arrow functions
        console.log(this.a + " " + this.b + " " + this.c);
    }
};

let o2 = {
    a : 1000,
    b : 2000,
    c : 3000
};

obj.fun1(); // this refers to obj
fun(); // this refers to global object
obj.fun2(); // this refers to obj
obj.fun3(); // unpredictable as arrow function (in node this of arrow fn is undefined)

obj.fun1.call(o2); // this refers to o2
fun.call(o2); // this refers to o2
obj.fun2.call(o2); // this refers to o2
obj.fun3.call(o2); // unpredictable as fun3 is an arrow function 

// this, arguments, call, bind, apply should not be used in arrow functions
// arrow functions can't be used as constructors