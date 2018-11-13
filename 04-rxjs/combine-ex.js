"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
var sub1 = new rxjs_2.Subject();
var sub2 = new rxjs_2.Subject();
rxjs_1.combineLatest(sub1, sub2).subscribe(function (whatDoIGetHere) {
    console.log(whatDoIGetHere);
});
sub1.next(0);
sub2.next('hello world');
