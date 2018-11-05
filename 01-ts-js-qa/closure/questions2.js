
function withName() {
    var name = 'bugeez.io';
    return function sayHello(newName) {
        name = `hello world ${newName}`;
        return name;
    }
}

let nerdeez = withName();
let bugeez = withName();

console.log(nerdeez('nerdeez'));
console.log(bugeez('bugeez'));
console.log(global.name);

function withName2() {
    return function sayHello(newName) {
        name = `hello world ${newName}`;
        return name;
    }
}

nerdeez = withName2();
bugeez = withName2();

console.log(nerdeez('nerdeez'));
console.log(bugeez('bugeez'));
console.log(global.name);

function withName3() {
    return function sayHello(newName) {
        "use strict"
        name = `hello world ${newName}`;
        return name;
    }
}

nerdeez = withName3();
bugeez = withName3();


console.log(nerdeez('nerdeez'));
console.log(bugeez('bugeez'));