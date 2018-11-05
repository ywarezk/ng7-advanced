
// 1. what will be the result of this code in the compiled JS
interface About {
    age: number;
    sayHello: () => string
}

class Person implements About {
    age = 33;
    sayHello : () => string = () => `hi my age is: ${this.age}`
}

