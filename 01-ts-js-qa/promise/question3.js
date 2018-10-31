
const timerPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello from promise');
        // reject(new Error());
    }, 1000);
});

const chainedPromise2 = timerPromise1
    .catch((err) => {
        return 10;
    })
    .then(() => {
        // the url will return json when placed on the browser
        return fetch('https://nztodo.herokuapp.com/api/task/?format=json');
    })
    .then((res) => {
        if (res.status !== 200) {
            throw new Error();
        }
        return res.json()
    })
    .catch((err) => {
        // 1. in what scenarios will this function be called? 
        console.log(err.message);
    })