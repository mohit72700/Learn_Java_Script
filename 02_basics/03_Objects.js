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
console.log(user1.name);
console.log(user1["age"]);
console.log(user1["full name"]);
console.log(user1[mySym]);

//you can update the value of key inside the object untill you do not freez the object 
user1.email= "mohit8764@gmail.com"



