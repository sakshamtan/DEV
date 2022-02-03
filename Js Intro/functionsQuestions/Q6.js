let obj = {
    fun1 : function()
    {
        console.log("This is man is called " + this.fullName + ". His age is " + this.age);
    },
    fun2 : function()
    {
        console.log("This is man is called " + obj.fullName + ". His age is " + obj.age);
    },
    fun3 : function()
    {
        console.log("This is man is called " + fullName + ". His age is " + age);
    },
    fullName : "Saksham Taneja",
    age : 22
};

obj.fun1(); // this pass hota hai khud hi this = jispe function call hua hai -> fun1 will work fine
obj.fun2(); // stack pe obj ka access hai is time tk to fun2 will also work fine
// obj.fun3(); // this will throw error as fullName and age nhi milegi function ko