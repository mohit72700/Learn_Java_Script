//  Immediately Invoked Function Expression (IIFE)

(function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //Semicolon is for terminate the function 

// If we are using two or more iife then we should end previous iief with semicolon(;)

( (name) => {
    console.log(`My name is ${name}.`)
}) ("Mohit")