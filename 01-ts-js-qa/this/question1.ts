
class Person {
    constructor(public age = 33) {
        this.birthday3 = this.birthday3.bind(this);
    }

    birthday1() {
        this.age++;
    }

    birthday2 = () => {
        this.age++;
    }

    birthday3() {
        this.age++;
    }
}

const yariv = new Person();
const obj = {
    birthday1: yariv.birthday1,
    birthday2: yariv.birthday2,
    birthday3: yariv.birthday3,
}

obj.birthday1();
console.log(yariv.age); // 33
obj.birthday2();
console.log(yariv.age); // 34
obj.birthday3();
console.log(yariv.age); // 35


function sayHello() {
    // this may change
}

const sayHello2 = () => {
    // this is binded to the object we are in
}

[1,2,3].forEach(() => {
    
})