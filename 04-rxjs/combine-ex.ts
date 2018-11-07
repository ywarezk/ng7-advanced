import { combineLatest, forkJoin } from 'rxjs';
import { Subject } from 'rxjs';

const sub1: Subject<number> = new Subject()
const sub2: Subject<string> = new Subject()

combineLatest(sub1, sub2).subscribe((whatDoIGetHere: Array<string | number>) => {
    console.log(whatDoIGetHere);
});

sub1.next(0);
sub2.next('hello world');