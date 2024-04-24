// for

for(let index = 0; index<=10; index++) {
     const element = index;
    //  console.log(element);
}

for (let i= 0; i< 10; i++) {
  //  console.log(`Outer loop valu: ${i}`);
  for(let j = 0; j<= 10; j++) {
      //  console.log(`${i}*${j} == ${i*j}`);
  }
  
}

//For loop with Array
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length)
for(let i=0; i<myArray.length; i++)
{
  const element = myArray[i];
  // console.log(element);
}

//Break and Continue
for(let i=0;i<=10; i++)
{
  if(i==5)
  {
    console.log(`5 is detected`)
    continue
  }
  console.log(`Value of i is: ${i}`)
}