class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUppercase()
    }

    set password(value){
        this._password = value.toUppercase()
    }
}

const sanjana = new User("sanj@gmail.com", "123")
console.log(sanjana.password);