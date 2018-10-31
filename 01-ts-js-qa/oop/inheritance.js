"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return this.name + " hello";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, grade) {
        if (grade === void 0) { grade = 100; }
        var _this = _super.call(this, name) || this;
        _this.grade = grade;
        console.log('stam');
        return _this;
    }
    // 1. how can we override the method sayHello?
    // 2. how can we override the method while using the parent sayHello?
    // 3. what is wrong with this code and how to fix it? 
    // 4. where are class methods defined
    Student.prototype.useName = function () {
        console.log(this.name);
    };
    return Student;
}(Person));
// 5. how does the prototype chain of this object looks like
var student = new Student('yariv', 50);
