const score= 400;
console.log(score);

const balance= new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(4))

const otherNumber= 24.76457
console.log(otherNumber.toPrecision(3))

const hundreds= 10000000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.99))
console.log(Math.max(1,100,4,67,44,54))
console.log(Math.min(999,2,45,67,1,5))

console.log((Math.random()*10)+1); //It will always be in betyween 0 and 1
const min=10;
const max= 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)