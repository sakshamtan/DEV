// Functions can be used to attain the same classes and objects functionality as in java
function Person(name, age) // Person is a function but can be treated as a class
{
    this.name = name;
    this.age = age;
    this.sayHi = function(f1)
    {
        console.log(this.name + "[" + this.age + "]" + " says Hi to " + f1);
    }
}

let p1 = new Person("Saksham", 22); // functions ko bhi new kr skte hai and unko new space allocate ho jaayega
p1.sayHi("Pankaj"); // p1 is a function but can be treated as an object