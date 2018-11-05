
// 1. nesting with var
for(var i = 0; i < 10; i++) {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }    
}

console.log('now with let');

// 2. nesting with let
for(let j = 0; j < 10; j++) {
    for(let j = 0; j < 10; j++) {
        console.log(j);
    }    
}

// variable declaration

// var/let/const <variable-name> = <value>

// scope of var variables is in the function
var hello = 'world';
var foo;

function sayHello() {
    var hello = 'stam';
}

// let/const
// their scope is in the block they are defined

if (true) {
    let myName = 'yariv'
    var anotherVariable = 'hello';
}

console.log(myName) // this variable is only available in the if

// const i have to give assignment

const student = 'yariv';
student = 10;

const myArray = [];
myArray.push(1);


function sayHello2() {
    //...
    var error = 'stam';

    // .... 
    if (true) {
        var error = 10;
    }
}



