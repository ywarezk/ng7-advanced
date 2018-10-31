
// Promise<string>
const timerPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello from promise');
    }, 1000);
});

// return Promise<?>
async function timerAndFetch() {
    try {
        const [msg, res] = await Promise.all([timerPromise1, fetch('https://nztodo.herokuapp.com/api/task?format=json'), new Promise(() => {
            
        })]);
        const json = await res.json();
    } catch(err) {
        return err.message;
    } 
}

// Promise<number>
async function timerAndFetch2() {
    try {
        // string
        // 1
        const myMessage = await timerPromise1;
        // 2
        console.log(myMessage);
        // 3
        return myMessage.length;
    } catch(err) {
        return err.message;
    } 
}

timerAndFetch().catch((err) => {
    // 1. when will this be called
    console.log(err.message);
});

// await timerAndFetch2() // await can only be in async function

timerAndFetch2().then(() => {

})