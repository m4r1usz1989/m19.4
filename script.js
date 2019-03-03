// zadanie pierwsze

const a = 'Hello';
const b =  'World';

console.log(`${a} ${b}`);

// zadanie drugie

const multiply = (first = 1, second = 1) => first * second;

console.log(multiply(2, 5));
console.log(multiply(5));


// zadanie trzecie

const average = (...args) => { 
    let sum = 0; args.forEach(args => sum += args);
    return sum / args.length; 
}

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// zadanie 5

const database = [1, 4, 'Iwona', false, 'Nowak'];
const[firstName, lastName, ...rest] = selectData;

console.log(`${firstName} ${lastName}`);