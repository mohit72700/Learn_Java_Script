

/* function myName()
{
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
    console.log("F")
}

myName() */

function addTwoNumbers(num1, num2)
{
    return num1+num2;
}

const result = addTwoNumbers(3,6)
// console.log("result is: "+result);

function loginUserMessage(username)
{
    if(username=== undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mohit"))
// console.log(loginUserMessage())

const user = {
    username: "Mohit",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} ande price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 577
})

const myNewArray = [200, 400, 500, 900]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 1000, 500, 200, 400]));
