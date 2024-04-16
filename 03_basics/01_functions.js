

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
console.log(loginUserMessage())
