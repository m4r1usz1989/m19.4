'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// zadanie pierwsze

var a = 'Hello';
var b = 'World';

console.log(a + ' ' + b);

// zadanie drugie

var multiply = function multiply() {
    var first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return first * second;
};

console.log(multiply(2, 5));
console.log(multiply(5));

// zadanie trzecie

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;args.forEach(function (args) {
        return sum += args;
    });
    return sum / args.length;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

// zadanie 5

var database = [1, 4, 'Iwona', false, 'Nowak'];

var _selectData = selectData,
    _selectData2 = _toArray(_selectData),
    firstName = _selectData2[0],
    lastName = _selectData2[1],
    rest = _selectData2.slice(2);

console.log(firstName + ' ' + lastName);
