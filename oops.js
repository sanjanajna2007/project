const user= {
    username: "sanjzz",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("got user details from database");
        console.log(this);
    }

    
}

//console.log(username);
//console.log(user.getUserDetails());



const user1 = {
    username: "sanjzz",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("got user details from database");
        console.log(this);
    }

    
}

//console.log(username);
//console.log(user.getUserDetails());

//const PromiseOne = new Promise()
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log('welcome ${this.username}');
    }

    return this
}

const userOne = User("sanju", 12, true)
const userTwo = User("chai", 11, false)
console.log(userOne);
console.log(userTwo);