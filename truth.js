let val1;
val1 = 5 ?? 10
val1 = null ?? 10

//console.log(val1);

const arr = [1, 2, 3, 4]
for (const num of arr) {
   //console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    //console.log('each char is ${greet}')
}

const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) =>{
    //console.log(item);
    return item
} )
//console.log(values);

const myNumers = [1, 2, 3, 4, 5, 7, 9, 6]

//const newNums=myNums.filter( (num) => {
   //return num > 4
//})
//console.log(newNums)

//const newNums = myNumers.map( (num) => { return num + 10})

const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log('acc: ${acc} and currval: ${currval}');
    return acc + currval
} , 0)

console.log(myTotal);

