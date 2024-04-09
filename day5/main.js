console.log(webTechs, countries);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.replace(/[^\w\s]/g, '');;
words = words.split(' ');

console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

let isThereMeat = null;
let meatChecker = null;

for (let index = 0; index < shoppingCart.length; index++) {
    isThereMeat = shoppingCart[index].match('Meat');
    if (isThereMeat == null) {
        meatChecker++;
    }
}

if (meatChecker > 0) {
    shoppingCart.unshift('Meat');
} 

console.log(shoppingCart);

let isThereSugar = null;
let sugarChecker = null;

for (let index = 0; index < shoppingCart.length; index++) {
    isThereMeat = shoppingCart[index].match('Sugar');
    if (isThereMeat == null) {
        sugarChecker++;
    }
}

if (sugarChecker > 0) {
    shoppingCart.push('Sugar');
} 

console.log(shoppingCart);

let alergicToHoney = false;
let foundHoney = null;

if (alergicToHoney == true) {
    for (let index = 0; index < shoppingCart.length; index++) {
        foundHoney = shoppingCart[index].match('Honey');
        if (foundHoney != null) {
            shoppingCart.splice(index, 1)
        }
    }
} 

console.log(shoppingCart);

let foundTea = null;

for (let index = 0; index < shoppingCart.length; index++) {
    foundTea = shoppingCart[index].match('Tea');
    if (foundTea != null) {
        shoppingCart[index] = 'Green Tea';
    }
}

console.log(shoppingCart);

let foundEthiopia = null;

for (let index = 0; index < countries.length; index++) {
    foundEthiopia = countries[index].match('Ethiopia');
    if (foundEthiopia != null) {
        console.log(countries[index].toUpperCase());
        break;
    }
}

if (foundEthiopia == null) {
    countries.push('Ethiopia');
    countries.sort();
}

console.log(countries);

let foundSass = null;

for (let index = 0; index < webTechs.length; index++) {
    foundSass = webTechs[index].match('Sass');
    if (foundSass != null) {
        console.log('Sass is a CSS preprocess');
        break;
    }
}

if (foundSass == null) {
    webTechs.push('Sass');
    webTechs.sort();
}

console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);