const user = {
    username: "sanzz",
    price: 9898,

    welcomeMessage: function() {
        console.log('${this.username} , welcome to website');
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this)

/*function chai() {
    console.log(this);
}
chai()*/

const chai =  () => {
    let username = "sanzzz"
    console.log(this.username);
}

chai()


var addTwo = (num1, num2) => num1 + num2
   

console.log(addTwo(712671, 182768))

const myArray = [2, 5, 7, 6]
.forEach()