"use strict";
var showError = function (message) {
    throw new Error(message);
};
var showErrors = function () {
    while (true) {
        console.log('Error');
    }
};
var showLog = function () {
    console.log('some log');
};
if (showLog() === undefined) {
    console.log('Jestem tutaj!');
}
