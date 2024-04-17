const user = {
    username: "Mohit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
        console.log(user)
    }
}

// user.welcomeMessage()
// user.username = "Rajini"
// user.welcomeMessage()

console.log(this)

//NOTE: we can n ot use 'this' keyword for function. It is used only for object. 

//........................ARROW FUNCTION ...........................
// Syntax :  () => { }
const first = () => {
    let username = "Mohit Singh Rathore"
    console.log(this)
}

// first()

const addTwo = (num1, num2) => {
    return num1+num2
}

// console.log(addTwo(2,4))

// const addThree = (num1, num2, num3) => (num1+ num2 + num3)
// console.log(addThree(3,4,7))

const addThree = (num1, num2, num3) => ({username: "Mohit"})

console.log(addThree(3,4,5))



