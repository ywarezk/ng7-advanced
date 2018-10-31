
// 1. how many of these classes will be created?
// Promise<string>
class Student<T extends string | number> {
    constructor(public grade: T) {}

    getGrade = (): T => {
        return this.grade
    }
}

// 2. do we need to declare what T is?
const studentA = new Student(100);
const studentB = new Student('A+');


interface HasLength {
    length: number;
    toString: () => string;
}

function getLength<T extends HasLength>(item: T) {
    return item.length;
}

getLength('hello');
getLength([1,2,3]);

// 3. why is there an error here? 
getLength(10);