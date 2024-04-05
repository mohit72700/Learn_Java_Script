const marvel_heros= ["Thor","ironman","Spiderman"]
const Bolywood= ["Ajay","Akshay","Sunil","Shushhant"]

// marvel_heros.push(Bolywood);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const Allheros= marvel_heros.concat(Bolywood)
// console.log(Allheros)

// const Allheros= [...marvel_heros, ...Bolywood]
// console.log(Allheros)

const arr= [1,2,3,["Mohit","Ram","Shayam","Rohit"],true,[2,[4,5,6]],3,9]
const real_array= arr.flat(3)
console.log(real_array)

console.log(Array.isArray("MOHIT"))
console.log(Array.from("MOHIT"))
console.log(Array.from({name:"MOHIT"}))  //interesting

let score1= 178
let score2= 200
let score3= 190
let score4= 180

console.log(Array.of(score1,score2,score3, score4))


