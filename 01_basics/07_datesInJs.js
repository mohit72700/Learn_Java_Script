let myDate= new Date();
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate= new Date(2023, 1, 23);  //Months start from 0 in js.
//let myCreatedDate= new Date("2023-01-14");
let myCreatedDate= new Date("03-30-2024");
// console.log(myCreatedDate.toString());

let myTimeStamp= Date.now();
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

let newDate= new Date();
console.log(newDate.getMonth())
