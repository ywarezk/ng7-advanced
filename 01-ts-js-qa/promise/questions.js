
// const timerPromise1 : Promise<string>
const timerPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello from promise');
    }, 1000);
})

const timerPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('timer error'));
    }, 1000);
})

timerPromise1.then((msg) => {
    console.log(msg); // 1. what will be printed? hello from promise
});

timerPromise2.then(
    () => {}, 
    (err) => {
    console.log(err.message); // 2. what will be printed here? timer error
});

timerPromise2.catch((err) => {
    console.log(err.message); // 3. what will be printed here
});

// myReturnedPromise: Promise<number | boolean>
const myReturnedPromise = timerPromise1.then((msg) => {
    return msg.length;
}, (err) => {
    return true
}).then((numberOrBoolean) => {
    if (typeof numberOrBoolean === 'number') {
        
    }
})

