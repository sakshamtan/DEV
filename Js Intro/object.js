// Object

// Key Value pair 

// Declaring an object
let obj = {};

let captain = {
    firstname : 'Steve',
    lastname : 'Rogers',
    friends : ['Bucky','Tony Stark','Dr Banner'],
    isAvenger : true,
    age : 150,
    address : {
        state : 'New York',
        city : 'Manhatten'
    },

    sayHi : function fn() {
        console.log('Cap says Hi');
    }
    
}

// console.log(captain);

// Dot notation
// console.log(captain.friends);

// Bracket notation
// console.log(captain['friends']);

// captain.sayHi();  // calling function inside an object

// Update object
// captain.isAvenger = false;
// console.log(captain);

// Create new key value pair inside an object
captain.movies = ['First Avenger','Winter Soldier','Endgame'];
// console.log(captain);

// Delete a property
// delete captain.age;
// console.log(captain);

// Special loop for iterating objects -> for in loop 

for(let key in captain)
{
    console.log("Key ->", key , ", Value ->", captain[key]);
}
