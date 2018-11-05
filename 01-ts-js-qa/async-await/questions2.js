

const timerPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello from promise');
    }, 1000);
});

function sayHello() {
    const timerStr = await timerPromise1; // await has to be on async function! Error!
    console.log(timerStr);
}

sayHello();
