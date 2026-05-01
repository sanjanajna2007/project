const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.pi);
Math.PI

console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 234,
    isAvaliable: true,
     
    orderchai: function() {
        console.log("chaii naaa");

    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    //writable: false,
    Enumerable: false,
    //configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){

    console.log('${key} : ${value}');
}    
    }
    

