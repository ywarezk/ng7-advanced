"use strict";
var Person = /** @class */ (function () {
    function Person(age) {
        if (age === void 0) { age = 33; }
        var _this = this;
        this.age = age;
        this.birthday2 = function () {
            _this.age++;
        };
        this.birthday3 = this.birthday3.bind(this);
    }
    Person.prototype.birthday1 = function () {
        this.age++;
    };
    Person.prototype.birthday3 = function () {
        this.age++;
    };
    return Person;
}());
var yariv = new Person();
var obj = {
    birthday1: yariv.birthday1,
    birthday2: yariv.birthday2,
    birthday3: yariv.birthday3,
};
obj.birthday1();
console.log(yariv.age);
obj.birthday2();
console.log(yariv.age);
obj.birthday3();
console.log(yariv.age);
