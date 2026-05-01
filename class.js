class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return'${this.password}abc'
    }
    changeUsername(){
        return '${username.toUpperCase()}'
    }
}

const chai = new username("chai", "chai@gmail.com", "123")

console.log(chai.encryptedPassword());
console.log(chai.changeUsername());


    function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    User.prototype.encryptPassword = function(){
        return'${this.password}abc'

    }

    

console.log(tea.encryptedPassword());
console.log(tea.changeUsername());

