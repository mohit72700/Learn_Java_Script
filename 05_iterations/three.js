// For of

//  ["", "",""]
// [{}, {},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
  // console.log(num)
}

const greeetings = "Hello Mohit Rathore"
for (const val of greeetings) {
    // console.log(`Each char is ${val}`)
}

// Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "Unioted States of America")
map.set('Fr', "France")
map.set('IN',"Bharat")

console.log(map)

for(const [key, value] of map) {
  console.log(key+ ' for '+ value);
}

const myObject = {
  'game1': 'NFS',
  'game2': 'Spiderman'
}

// for (const [v1,v2] of object) {
  
// }

// Object is not iteratable using above for loop