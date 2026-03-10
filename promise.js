const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)

})

promiseOne.then(function() {
    console.log("promise consumed");
})

new promiseOne(function(resolve, reject) {
    setTimeout(function () {
        console.log("A");
    }, 1000)
}).then(function () {
    console.log("Async 2 reolved");
})

const promiseThree = new promiseOne(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "sanju", email:"sanju@gmail.com"})
    }, 1000)

})

promiseThree.Then(function(user){
    console.log(user)

})

const promiseFour = new promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve ({username: "hitesh", password: "`231"})
        } else {
            reject('ERROR: sometimes went wrong')
        }
    }, 1000)
})

const username = LockManagerpromiseFour.then((user) => {
    console.log(user);
    return user.username
})

.then((username) => {
    console.log(username);
})
.catch(function(error) {

    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")); 

const promiseFive = new promise(function(resolve, reject){
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve ({username: "hitesh", password: "`231"})
        } else {
            reject('ERROR: sometimes went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumepromiseFive()

async function getAllUsers() {
    const response = await fetch('')
}


