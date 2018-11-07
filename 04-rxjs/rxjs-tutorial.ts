import { Observable, Observer, Subscription, Subject, interval, of, from } from 'rxjs';
import { map, debounceTime, catchError } from 'rxjs/operators';

// rxjs

// 1. observer2
// 2. observables
// 3. subscription
// 4. subject
// 5. operators

// Promise
const timerPromise : Promise<string> = new Promise((resolve, reject) => {
    console.log('is promise running when nobody listens?');
    setTimeout(() => {
        resolve('hello from promise');
    }, 1000)
})

timerPromise.then((msg : string) => {
    console.log('this will run when the promise resolved');
    console.log(msg)
}, () => {
    console.log('this will run when the promise rejects');
})

timerPromise.then((msg : string) => {})

// observable represents data stream
// obesrver represents listener to data stream

const timerObservable : Observable<string> = Observable.create((observer : Observer<string>) => {
    setTimeout(() => {
        observer.next('hello from Observables')
        // observer.error(new Error()); // sends an error in the observable
        observer.complete() // close the data stream 
    }, 1000)
});

const sub1 : Subscription = timerObservable.subscribe(
    (msg: string) => {
        console.log('when next is called')
    },
    () => {
        console.log('observable sends error')
    },
    () => {
        console.log('when observable is closed')
    }
)

// 1. differences between promise and observable
// promise returns one value - calls once to resolve or reject
// observable can call next multiple times

const intervablObservable : Observable<number> = Observable.create((observer: Observer<number>) => {
    console.log('interval async function');
    let counter = 0;
    // clearInterval(id);

    const id = setInterval(() => {
        console.log('is the interval still running? ');
        observer.next(counter);
        counter++;
        if (counter > 4) {
            observer.complete();
            // observer.error(new Error());
        }
    }, 1000)

    // this will be called when the data steam close
    return function() {
        console.log('observable is cleaning');
        clearInterval(id);
    }
});

intervablObservable.subscribe((counter: number) => {
    console.log(counter);
}, () => {
    console.log('error1');
}, () => {
    console.log('complete1');
});

intervablObservable.subscribe((counter: number) => {
    console.log(counter);
}, () => {
    console.log('error2');
}, () => {
    console.log('complete2');
});

const intervalSubscription : Subscription = intervablObservable.subscribe((counter: number) => {
    console.log(counter);
}, () => {
    console.log('error3');
}, () => {
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

setTimeout(() => {
    intervalSubscription.unsubscribe()
}, 2000)

// Promise VS Obesrvable
// observable is cancelable
// promise is not cancelable

// Subject
// represents data stream
// it exists once for many listeners
// subject doesnt have async function

const myIntervalSubject : Subject<number> = new Subject();

let counter = 0;
setInterval(() => {
    myIntervalSubject.next(counter);
    counter++;
    if (counter > 4) {
        myIntervalSubject.complete();
    }
}, 1000)

myIntervalSubject.subscribe((counter) => {
    console.log(counter);
}, 
() => {}, 
() => {
    console.log('this will run when complte')
})

myIntervalSubject.subscribe((counter) => {
    console.log(counter);
});

// operators

// help us manipulate data stream
// 1. can create new data stream
// 2. map data stream to another data stream
// 3. filter data stream

// set of function => returns new observable


const intervalObservableFromOperator : Observable<number> = interval(1000)

// what if i want to return not a number but a string? 

// pipe will get a set of operators and return a new observalbe

// hello world pulse every second
const intervalTurnedToString : Observable<number | string> = intervalObservableFromOperator.pipe(
    map((counter: number) => {
        return 'hello world'
    }),
    map((msg: string) => msg.length),
    // debounceTime(2000),
    catchError((error) => {
        return of('this is not an error');
    })
    // operator1,
    // operator2
)


// Promise => Observables

const observableFromTimerPromise : Observable<string> = from(timerPromise)

// Observable => Promise

intervalObservableFromOperator.toPromise();







