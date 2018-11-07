"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// rxjs
// 1. observer2
// 2. observables
// 3. subscription
// 4. subject
// 5. operators
// Promise
var timerPromise = new Promise(function (resolve, reject) {
    console.log('is promise running when nobody listens?');
    setTimeout(function () {
        resolve('hello from promise');
    }, 1000);
});
timerPromise.then(function (msg) {
    console.log('this will run when the promise resolved');
    console.log(msg);
}, function () {
    console.log('this will run when the promise rejects');
});
timerPromise.then(function (msg) { });
// observable represents data stream
// obesrver represents listener to data stream
var timerObservable = rxjs_1.Observable.create(function (observer) {
    setTimeout(function () {
        observer.next('hello from Observables');
        // observer.error(new Error()); // sends an error in the observable
        observer.complete(); // close the data stream 
    }, 1000);
});
var sub1 = timerObservable.subscribe(function (msg) {
    console.log('when next is called');
}, function () {
    console.log('observable sends error');
}, function () {
    console.log('when observable is closed');
});
// 1. differences between promise and observable
// promise returns one value - calls once to resolve or reject
// observable can call next multiple times
var intervablObservable = rxjs_1.Observable.create(function (observer) {
    console.log('interval async function');
    var counter = 0;
    // clearInterval(id);
    var id = setInterval(function () {
        console.log('is the interval still running? ');
        observer.next(counter);
        counter++;
        if (counter > 4) {
            observer.complete();
            // observer.error(new Error());
        }
    }, 1000);
    // this will be called when the data steam close
    return function () {
        console.log('observable is cleaning');
        clearInterval(id);
    };
});
intervablObservable.subscribe(function (counter) {
    console.log(counter);
}, function () {
    console.log('error1');
}, function () {
    console.log('complete1');
});
intervablObservable.subscribe(function (counter) {
    console.log(counter);
}, function () {
    console.log('error2');
}, function () {
    console.log('complete2');
});
var intervalSubscription = intervablObservable.subscribe(function (counter) {
    console.log(counter);
}, function () {
    console.log('error3');
}, function () {
    console.log('complete3');
});
// 2. difference Promise VS Observalbe
// promise will always run the async function even if there is no listeners
// Observable will not run the async function only if it has listeners
// observable is lazy
// 3. Observable VS Promises
// how many times the async functions is going to run
// for x listeners => x times
// for x listeners => 1 time
// for promise the async function will always run once no matter how many listeners
// for observable the async function will run for every listeners, x listeners will run x times
// im duplicating the data stream for every listener
// inifinite data streams has to be released!!!!
// when is our data stream close? and if it is closing? 
// calling observer.complete() will close the data stream the listeners complete function will be called
// calling observer.error(new Error()) // close data stream with error // error function will be called but not complete
// calling unsubscribe on Subscription complete is not called
setTimeout(function () {
    intervalSubscription.unsubscribe();
}, 2000);
// Promise VS Obesrvable
// observable is cancelable
// promise is not cancelable
// Subject
// represents data stream
// it exists once for many listeners
// subject doesnt have async function
var myIntervalSubject = new rxjs_1.Subject();
var counter = 0;
setInterval(function () {
    myIntervalSubject.next(counter);
    counter++;
    if (counter > 4) {
        myIntervalSubject.complete();
    }
}, 1000);
myIntervalSubject.subscribe(function (counter) {
    console.log(counter);
}, function () { }, function () {
    console.log('this will run when complte');
});
myIntervalSubject.subscribe(function (counter) {
    console.log(counter);
});
// operators
// help us manipulate data stream
// 1. can create new data stream
// 2. map data stream to another data stream
// 3. filter data stream
// set of function => returns new observable
var intervalObservableFromOperator = rxjs_1.interval(1000);
// what if i want to return not a number but a string? 
// pipe will get a set of operators and return a new observalbe
// hello world pulse every second
var intervalTurnedToString = intervalObservableFromOperator.pipe(operators_1.map(function (counter) {
    return 'hello world';
}), operators_1.map(function (msg) { return msg.length; }), 
// debounceTime(2000),
operators_1.catchError(function (error) {
    return rxjs_1.of('this is not an error');
})
// operator1,
// operator2
);
// Promise => Observables
var observableFromTimerPromise = rxjs_1.from(timerPromise);
// Observable => Promise
intervalObservableFromOperator.toPromise();
