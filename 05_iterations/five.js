const coding =["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val)) {
//   console.log(val);
// })

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
})

function printMe(item){
  console.log(item);
}

// coding.forEach(printMe)
const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js"
  },
  {
    languageName: "Java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
]

myCoding.forEach((element) => {
   console.log(element.languageFileName);
})