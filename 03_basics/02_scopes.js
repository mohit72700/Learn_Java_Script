// var c= 400
let a = 300
if(true)
{
    let a=10
    const b=20
    // var c= 30
    let c =40
    // console.log("Inner value of a: ",a)

}
// console.log("Outer value of a: ",a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Mohit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

    // two()
}

// one()

// ++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

console.log(addone(7))    //It will not give any error
function addone(num){
    return num+1;
}

console.log(addone(5))  //It will not give any error

// console.log(addTwo(5))   //....This line will give error.... 
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5))  //It will not give any error