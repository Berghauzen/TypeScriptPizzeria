"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizzeria = void 0;
var Pizzeria = /** @class */ (function () {
    function Pizzeria(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOven = 10;
        this.recipes = [];
        this.private_manager = 'Jan Kowalski';
        this.id = Pizzeria.id++;
        this.name = name;
    }
    Object.defineProperty(Pizzeria.prototype, "manager", {
        get: function () {
            return this.manager;
        },
        set: function (manager) {
            this.manager = manager;
        },
        enumerable: false,
        configurable: true
    });
    Pizzeria.prototype.getPaymentMethod = function (payment) {
        switch (payment.type) {
            case 'cash': return 'Paid in cash in ${payment.currency}';
            case 'debitCard': return 'Paid with debit card with code ${payment.code}';
            case 'onlinePayment': return 'Paid online, with bank account ${payment.bankAccount}';
        }
    };
    Pizzeria.prototype.order = function (pizza) {
        this.pizzasInOrder.push(pizza);
    };
    Pizzeria.prototype.changeStatus = function (index, status) {
        this.pizzasInOrder[index].status = status;
    };
    Pizzeria.prototype.changeSize = function (index, size) {
        this.pizzasInOrder[index].size = size;
    };
    Pizzeria.prototype.checkPrice = function (_a) {
        var price = _a.price;
        if (typeof price === 'string') {
            console.log('price is string', price.toLowerCase);
        }
        else if (typeof price === 'number') {
            console.log('prive is number, price.toFixed'());
        }
        else {
            console.log(price);
        }
    };
    Pizzeria.prototype.isOvenFull = function () {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    };
    Pizzeria.id = 0;
    return Pizzeria;
}());
exports.Pizzeria = Pizzeria;
