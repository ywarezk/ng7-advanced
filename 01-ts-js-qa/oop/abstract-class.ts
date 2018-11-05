

// 1. what is the difference between abstract class and regular class?
// 2. what will this code output?
abstract class About {
    public age: number;
    public sayHello: () => string;
}

// 3. when will we use abstract class and when interface?
class Person extends About {
    age = 33;
    sayHello = () => `hi my age is: ${this.age}`
}