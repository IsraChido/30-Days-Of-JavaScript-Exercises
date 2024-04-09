const array = [];

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);

console.log(numbers[0], numbers[2], numbers[numbers.length - 1]);

const mixedDataTypes = ['abc', 123, ['xyz'], 4, 5, 6];

console.log(mixedDataTypes.length);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0], itCompanies[Math.round(itCompanies.length / 2) - 1], itCompanies[itCompanies.length - 1]);

console.log(itCompanies.join(', '));

console.log(itCompanies.join(', ').toUpperCase());

console.log(itCompanies.join(', '), 'are big IT companies.');

let company = 'Google';
let isCompanyIncluded = itCompanies.includes(company);

if (isCompanyIncluded === -1) {
    console.log('Company not found');
} else {
    console.log(company);
}

let oMoreThanOnce, newItCompanies = [];

for (let index = 0; index < itCompanies.length; index++) {
    oMoreThanOnce = itCompanies[index].includes('o' && 'o');
    if (oMoreThanOnce == true) {
        newItCompanies.push(`${itCompanies[index]}`);
    } 
}

console.log(newItCompanies);

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0,3));

console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

if(itCompanies.length % 2 == 0) {
    console.log(itCompanies.slice(Math.round(itCompanies.length / 2) - 1, Math.round(itCompanies.length / 2) + 1));
} else {
    console.log(itCompanies.slice(Math.round(itCompanies.length / 2) - 1, Math.round(itCompanies.length / 2)));
}

itCompanies.shift();

console.log(itCompanies);

if(itCompanies.length % 2 == 0) {
    itCompanies.splice(Math.round(itCompanies.length / 2) - 1, 2);
    // itCompanies[Math.round(itCompanies.length / 2) - 1] = 0;
    // itCompanies[Math.round(itCompanies.length / 2)] = 0;
} else {
    itCompanies.splice(Math.round(itCompanies.length / 2) - 1, 1);
    // itCompanies[Math.round(itCompanies.length / 2) - 1] = 0;
}

console.log(itCompanies);

itCompanies.pop();

console.log(itCompanies);

console.log(itCompanies.splice());