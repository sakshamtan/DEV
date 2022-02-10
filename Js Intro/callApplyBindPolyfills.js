
// myBind()
Function.prototype.myBind = function()
{
    let orgFun = this; // original function on which myBind was called
    let args = Array.from(arguments); // from function to convert arguments to array

    let boundFun = function()
    {
        let thisForOrgFun = args[0]; // pehla arguement is this in bind function
        let argsForOrgFun = args.slice(1); // 1 se end tk array ke are parameters passed to function
        let argsFromInvocation = Array.from(arguments); // boundFunction() ke andar jo args pass huye unko catch kra
        argsForOrgFun = argsForOrgFun.concat(argsFromInvocation);

        orgFun.apply(thisForOrgFun, argsForOrgFun);
    }
    return boundFun;
}

// myCall()
Function.prototype.myCall = function()
{
    let orgFun = this;
    let args = Array.from(arguments);
    let thisForOrgFun = args[0];
    let params = args.slice(1);

    // orgFun.apply(thisForOrgFun,params);

    // Without using apply ->

    thisForOrgFun.fun = orgFun;    // object mei function hi add krdia
    thisForOrgFun.fun(...params);  // ... -> array ko comma separated values mei convert kr deta hai
    delete thisForOrgFun.fun;      // added function delete bhi krna pdega so object mei change naa aaye
}

// arr = [10, 20, 30, 40, 50]
// ...arr = 10, 20, 30, 40, 50  triple dots convert array into comma separated values

// myApply()
Function.prototype.myApply = function()
{
    let orgFun = this;
    let args = Array.from(arguments);
    let thisForOrgFun = args[0];
    let params = args[1];

    thisForOrgFun.fun = orgFun;
    thisForOrgFun.fun(...params);
    delete thisForOrgFun.fun;

}

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

let obj2 = {
    fullName : "Neha",  
    age : 33
}

let bindFunction = obj.fun.myBind(obj2, "Mehwish", "Shailja");
// bindFunction();
// bindFunction("Sumeet");

// obj.fun.myCall(obj2, "Mehwish", "Shailja", "Sumeet");

obj.fun.myApply(obj2, ["Mehwish", "Shailja", "Sumeet"]);
