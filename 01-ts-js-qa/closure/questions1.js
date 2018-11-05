

function withName(name) {
    return function sayHello() {
        return `hello 
        world ${name}
        ${1 + 1}
        ${Math.random()}
        `;
    }
}

const nerdeez = withName('nerdeez');
const bugeez = withName('bugeez');

console.log(nerdeez());
console.log(bugeez());