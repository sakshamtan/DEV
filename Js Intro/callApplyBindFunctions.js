let obj = {
    fun : function(friend1, friend2)
    {
        console.log("This person is called " + this.fullName + ". His/Her age is " + this.age + ",");
        console.log(this.fullName + " says hello to " + friend1);
        console.log(this.fullName + " says hello to " + friend2);

        console.log(arguments);
    },
    fullName : "Saksham Taneja",
    age : 22
};

// Ways of calling ->
// obj.fun("Navdeep", "Vikas"); // normal way of calling

// 1) Calling with the call function

// call is a function. It is available on all functions. It can be used to call the function
// The use case is, if you want to override the default this.

let obj2 = {
    fullName : "Neha",  
    age : 33
}

// now this mei default upr vaale obj ki jagah ye vaala obj pass hoga
obj.fun.call(obj2, "Mehwish", "Shailja");

// Same way of using call function
// obj.fun.call({
//     fullName : "Neha", 
//     age : 33
// },"Mehwish", "Shailja"); 

// 2) Same can be done with apply function -> Here parameters to the function are passed in an array
obj.fun.apply(obj2, ["Mehwish", "Shailja", "Supriya"]);

// 3) Bind is not similar to call and apply as it creates a new function
let bindFunction = obj.fun.bind(obj2, "Mehwish", "Shailja");
bindFunction();
bindFunction("Sumeet"); // Aise sumeet bhi ek additional parameter pass hogya
