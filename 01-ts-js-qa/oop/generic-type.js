"use strict";
// 1. how many of these classes will be created?
var Student = /** @class */ (function () {
    function Student(grade) {
        var _this = this;
        this.grade = grade;
        this.getGrade = function () {
            return _this.grade;
        };
    }
    return Student;
}());
// 2. do we need to declare what T is?
var studentA = new Student(100);
var studentB = new Student('A+');
function getLength(item) {
    return item.length;
}
getLength('hello');
getLength([1, 2, 3]);
// 3. why is there an error here? 
getLength(10);
