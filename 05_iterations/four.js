const myObject = {
  js: 'JavaScript',
  cpp: 'C++',
  rb: 'Ruby',
  swift: "swift by apple",
  py: 'Python'
}

for (const i in myObject) {
  console.log(`${i} is shortcut for ${myObject[i]}`)
}

const array = ["py", "js", "rb", "cpp"]
for (const key in array) {
  //  console.log(array[key])
}

