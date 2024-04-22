const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

for (let index = 0; index <= 10; index++) {
    console.log(index);
}

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

i = 0

do {
    console.log(i);
    i++;
} while (i <= 10);

for (let index = 10; index >=0; index--) {
    console.log(index);
}

i = 10;

while (i >= 0) {
    console.log(i);
    i--;
}

i = 10;

do {
    console.log(i);
    i--;
} while (i >= 0);

let n = 13;

for (let index = 0; index <= n; index++) {
    console.log(index);
}

n = 7;
let hashtag = '';

for (let index = 0; index <= n; index++) {
    hashtag += '#';
    console.log(hashtag);
}

for (let index = 0; index <= 10; index++) {
    console.log(`${index} x ${index} = ${index * index}`);
}

console.log(`i\t i^2\t i^3`);
for (let index = 0; index <= 10; index++) {
    console.log(`${index}\t ${index**2}\t\t ${index**3}`);
}

n = 100;

for (let index = 0; index <= n; index++) {
    if (index % 2 == 0) {
        console.log(index);
    }
}

for (let index = 0; index <= n; index++) {
    if (index % 2 != 0) {
        console.log(index);
    }
}

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

let sum = 0;

for (let index = 0; index <= 100; index++) {
    sum += index;
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

let sumEven = 0;
let sumOdds = 0;

for (let index = 0; index <= n; index++) {
    if (index % 2 == 0) {
        sumEven += index;
    } else {
        sumOdds += index;
    }
}

console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);

let sumEvenOddsArray = [sumEven, sumOdds];

console.log(sumEvenOddsArray);

let fiveRandomNumbers = [];

for (let index = 0; index <= 4; index++) {
    fiveRandomNumbers.push(Math.random());
}

console.log(fiveRandomNumbers);

fiveRandomNumbers = [];

for (let index = 0; index <= 4; index++) {
    fiveRandomNumbers.push(Math.random() + index);
}

console.log(fiveRandomNumbers);

let sixCharacters = [];

sixCharacters.push(Math.random().toString(36).slice(2, 8));

console.log(sixCharacters);