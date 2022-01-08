// Arrays

// let arr = []; // array is initialized with sqaure brackets

// arr = [1,2,'hello',4,false];
// In js you can put any kind of data into the array
// console.log(arr);

// Array Methods
let cars = ["BMW","Jaguar","Mercedes","Hyundai","Maruti"];
// console.log(cars);

// Replace an element in an array
// cars[1] = 'Bentley';
// console.log(cars);

// Add a new element to an array
// cars[5] = 'Audi';
// console.log(cars);

// Length of an array
// console.log(cars.length);

// Array manipulation methods -

// pop() -> It deletes and returns the last element present in the array
// let poppedCar = cars.pop();
// console.log(poppedCar);
// console.log(cars);

// push() -> It adds an element at the end of the array
// cars.push('alto');
// console.log(cars);

// shift() -> It removes element from the starting of the array
// let shiftedCar = cars.shift();
// console.log(shiftedCar);
// console.log(cars);

// unshift() -> It adds an element at the start of the array and shifts the other elements(without replacing 0 index)
// cars.unshift('alto');
// console.log(cars);

// slice() on array -> copy of part / slice of the array 
// first parameter is starting index and second parameter is ending index
let slicedCars = cars.slice(1,3); // ending index is exclusive
console.log(slicedCars);
console.log(cars);