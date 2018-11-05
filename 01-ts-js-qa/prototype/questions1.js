
const myNumber = 10;
myNumber.__proto__ // 1. this is equal to what? Number.prototype
myNumber.__proto__.__proto__ // 2. this is equal to what? // Object.prototype

function Person1(name) {
    this.name = name;
}

Person1.__proto__; // 3. this is equal to what? Function.prototype
Person1.__proto__.__proto__; // 4. this is equal to what? Object.prototype

let bugeez = new Person1('bugeez');

bugeez.__proto__ // 5. this is equal to what? Person1.prototype
bugeez.__proto__.__proto__ // 6. this is equal to what? Object.prototype

const myFirstPrototype = {
    hello: 'world'
}

myFirstPrototype.__proto__ === Object.prototype;

const child = Object.create(myFirstPrototype);
child.__proto__ // 7. this is equal to what? //myFirstPrototype

function Person2(name) {
    this.name = name;
    this.sayHello1 = () => {
        console.log(this.name);
    }
}

Person2.prototype.sayHello2 = function() {
    console.log(this.name);
}

// Object.defineProperty(Person2.prototype, 'sayHello2', {
//     enumerable: false
// })

bugeez = new Person2('bugeez');
let nerdeez = new Person2('nerdeez');

bugeez.sayHello1 === nerdeez.sayHello1; // 8. what will this return? this is false
bugeez.sayHello2 === nerdeez.sayHello2; // 9. what will this return? true

for(let key in bugeez) {
    if (bugeez.hasOwnProperty(key)) {

    }
    console.log(key) // 10. what will this print?
}

for (let item of [1,2,3,4]) {

}

for (let item of Object.keys(bugeez)) {

}

Object.defineProperty(bugeez, 'foo', {
    enumerable: true
})

bugeez.hasOwnProperty('name'); // 11. what will this be equal?
bugeez.hasOwnProperty('sayHello1'); // 12. what will this be equal?
bugeez.hasOwnProperty('sayHello2'); // 13. what will this be equal?