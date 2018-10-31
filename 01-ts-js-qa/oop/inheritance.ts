

class Person {
    constructor(private name: string) {}

    sayHello() {
        return `${this.name} hello`;
    }
}

class Student extends Person {
    constructor(name, public grade: number = 100) {
        super(name);
        console.log('stam');
    }

    // 1. how can we override the method sayHello?
    // 2. how can we override the method while using the parent sayHello?

    // 3. what is wrong with this code and how to fix it? 
    // 4. where are class methods defined
    public useName() {
        console.log(this.name);
    }
}

// 5. how does the prototype chain of this object looks like
const student = new Student('yariv', 50);