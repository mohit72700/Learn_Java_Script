// const instaUser = new Object()
const instaUser = {};

instaUser.name= "Mohit"
instaUser.id= "singhMohit"
instaUser.isLoggedIn = false


// console.log(instaUser)

// Nested object
const regularUser = {
      email: "mohit@gmail.com",
      fullname: {
              userfullname: {
                 firstname: "Mohit",
                 lastname: "Rathore"
              }
      }
}

// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d"}

// const obj3= {obj1, obj2}
const obj3= Object.assign({}, obj1, obj2) //{} is optional
// console.log(obj3)

const obj4= {...obj1, ...obj2}  // concept of spread
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "mohit@microsoft.com"
    },
    {
        id: 1,
        email: "mohit@microsoft.com"
    },
    {
        id: 1,
        email: "mohit@microsoft.com"
    }
]

users[1].email 
console.log(instaUser);

console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))

console.log(instaUser.hasOwnProperty('id'))





