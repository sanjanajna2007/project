function calculatecartprice( val1, val2, ...num0){
    return num0
}

//console.log(calculatecartprice(200, 400, 500, 20000))

const user = {
    username: "sanjana",
    price: 188
}

function handleObject(anyObject){
    console.log('username is ${anyObject.username} and price is ${} ,{anyOject.price}');


}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewarray));
