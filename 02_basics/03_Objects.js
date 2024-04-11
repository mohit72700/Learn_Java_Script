// Singleton

// Object literals

const mySym= Symbol("Key1")

const user1= {
     name:"Mohit",
     "full name": "Mohit singh Rathore",
     age: 24,
     [mySym]: "My symbol", //if we want to use mySym as a symbol then we need to close mySym in [].
     location: "Rourkela",
     email: "mohit@ffgh.com",
     isLoggedIn:false,
     lastLoginDay: ["Monday","Wendnesday"]

}
// console.log(user1.name);
// console.log(user1["age"]);
// console.log(user1["full name"]);
// console.log(user1[mySym]);

//you can update the value of key inside the object untill you do not freez the object 
user1.email= "mohit8764@gmail.com"
console.log(user1.email)
//Let's freez the object
// Object.freeze(user1)
user1.email= "mohit@microsoft.com"
console.log(user1.email)
// console.log(user1)

//If we want to use below function then first we need to check that object should not be freez
user1.greeting= function(){
     console.log("Hello Java script users");
}
user1.greeting2 = function(){
     console.log(`Hello Java script user, ${this.name}`);
}
console.log(user1.greeting());
console.log(user1.greeting2());





