"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        this.data.shift();
    };
    Queue.prototype.getAll = function () {
        return this.data;
    };
    return Queue;
}());
//const people = new Queue<string>();
//people.push("abc");
//people.push(123);
//const numbers = new Queue<string>();
//people.push(456);
//people.push(456);
var productItems = new Queue();
productItems.push({ id: 123, name: 'Milk', code: 'AA333' });
