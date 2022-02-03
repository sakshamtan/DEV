
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
bindFunction("Sumeet");