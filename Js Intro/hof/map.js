// hof -> high order functions (functions that take other functions as their arguement)
// map function available on arrays
// It doesnt change the original array

let arr = [1,2,3,4,5];

function sqaurer(x)
{
  return x * x;
}

function cuber(x)
{
  return x * x * x;
}

// for(let i = 0; i < arr.length; i++)
// {
//     arr[i] = sqaurer(arr[i]);
// }
// console.log(arr);

// Upar ka saara kaam ek line mei map function se ho skta hai
let squaredArr = arr.map(sqaurer); // squarer function poore array mei apply ho jaayega
// console.log("squared array:", squaredArr);

let cubedArr = arr.map(cuber);
// console.log("cubed array:", cubedArr);

// Map question_01 (freecodecamp) -> Extract title and imdb rating from watchList array using map function
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];

function extractTitleAndRatings(movieObj)
{
    return {    // returned a new small object
        "title" : movieObj["Title"],
        "rating" : movieObj["imdbRating"]
    }
}

let newArr = watchList.map(extractTitleAndRatings);
// console.log(newArr);

// Map question_02 -> Given an array of names return an array of just the initials
let namesArr = ["Saksham Taneja","Ranbhir Kapoor","Salman Khan","Vicky Kaushal"]; 
// We have to return ['ST','RK','SK','VK']

function extractInitials(name) // name mei arr[0],arr[1]....arr[n] pass hoga when applying map function
{
  let names = name.split(" "); // "Saksham Taneja" -> ["Saksham","Taneja"]
  let firstName = names[0];
  let lastName = names[1];

  return firstName.charAt(0) + lastName.charAt(0);

}

let initialsArr = namesArr.map(extractInitials);
// console.log(initialsArr);

// Map Question_03 -> for all incomes < 100 double their income in the array of objects
let member = [
  { g : "M", age : 20, income : 70 },
  { g : "F", age : 25, income : 110},
  { g : "M", age : 30, income : 250},
  { g : "F", age : 18, income : 55}
];

function doubleIncome(memberObj)
{
  if(memberObj.income < 100)
    memberObj.income *= 2;
  
  return memberObj; // returning the result is necessary in the function that is to be mapped otherwise undefined aayega output mei
}

// let newMember = member.map(doubleIncome);
// console.log(member); // Note that here original array is changed as well because we passes obj into doubleIncome function and obj passes reference so vahi jaakr change hogya.
// console.log(newMember);

//To avoid changing the original array (data) we will create a copy of object in doubleIncome function and then perform changes in it and the return it.
function doubleIncome_02(memberObj)
{
  //option 1 -> To create a copy of original object
  // let newObj = {};
  // for(let key in memberObj)
  // {
  //   newObj[key] = memberObj[key];
  // }

  //option 2 -> Syntactical sugar to create a copy of orignal object
  let newObj = {...memberObj}; // memberObj newObj mei copy ho jaata hai (syntactical sugar)

  if(newObj.income < 100)
  newObj.income *= 2;

  return newObj;
}

console.log(member); // Now the original data is not changed
let newMember_02 = member.map(doubleIncome_02);
console.log(newMember_02);