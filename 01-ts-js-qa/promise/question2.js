
// Promise<string>
const timerPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello from promise');
    }, 1000);
});

// 1. what is the type of this promise: Promise<number>?
const chainedPromise1 = timerPromise1.then((msg) => {
    return msg.length;
})

// this example will work only in the browser
// 2. what is the type of this promise: Promise<jsonObject>
const chainedPromise2 = timerPromise1.then(() => {
    // the url will return json when placed on the browser
    return fetch('https://nztodo.herokuapp.com/api/task/?format=json'); // Promise<Response>
}).then((res) => {
    return res.json(); // Promise<jsonObject>
});

const timerPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('error'));
    }, 1000);
});

// 3. what will be the type of timerPromise3: Promise<?>
const timerPromise3 = timerPromise2.catch((err) => {
    return err.message;
}).then((errorMessage) => {
    return errorMessage.length;
});