function multipleBy5(num){
    return num*5

}

multipleBy5.power = 2

//console.log(multipleBy5(5));
//console.log(multipleBy5.power);
//console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username
}

createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.printMe = function() {
    console.log('score is ${this.score}');
}

const chai = createUser("chai", 25)
const tea = createUser("tea", 259)

//chai.printMe()





//\\\\\\\\\\\\\\\\\\\    prototype     /////////////////////

//let myName = "sanjana      "
//let myChannel = "chai     "

let myHeros = ["star", "kavacha"]

let heroPower = {
    thor: "hammer",
    kavacha: "slings",

    getSpiderPower: function() {
        console.log('kavachii is ${this.kavacha}');
    }
}

Object.prototype.sanjana = function(){
    console.log('sanjana is present in all objects');
}

//heroPower.hitesh()

Array.prototype.heysanjana = function() {
    console.log('sanjana says hello');
}

myHeros.sanjana()
myHeros.heysanjana()



//###### inheritance##########

const User = {
    user: "sanjana",
    email: "sanjana@gmail.com" ,
}

const Teacher = {
    isAvailable: false
}

const TeachingSupport = {
    makeVideo: true
}

const TAssupport = {
    makeAssaignment: 'JS assignment',
    fullTime: true,
    ___proto___: TeachingSupport
}

Teacher.__proto__ = User

