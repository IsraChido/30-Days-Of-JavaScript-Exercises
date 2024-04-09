// let base = prompt('Enter base');
// let height = prompt('Enter height');
// let triangle =  0.5 * Number(base) * Number(height);

// alert('The area of the triangle is: ' + triangle);

// let sidea = prompt('Enter side a');
// let sideb = prompt('Enter side b');
// let sidec = prompt('Enter side c');
// let perimeter =  Number(sidea) + Number(sideb) + Number(sidec);

// alert('The perimeter of the triangle is: ' + perimeter);

// let length = prompt('Enter length');
// let width = prompt('Enter width');
// let area =  Number(length) * Number(width);
// let perimeter = (Number(length) * 2) +  (Number(width) * 2);

// alert('The area of a rectangle is: ' + area + ', and the perimeter is: ' + perimeter);

// let radius = prompt('Enter radius');
// let pi = 3.14;
// let area =  pi * Number(radius) * Number(radius);
// let circumference = 2 * pi * Number(radius);

// alert('The area of a circle is: ' + area + ', and the circumference is: ' + circumference);

// console.log('math bs (5,6,7,8)');

// let hours = prompt('Enter hours');
// let rph = prompt('rate per hour');
// let weeklyEarning = Number(rph) * Number(hours);

// alert('Your weekly earning is: ' + weeklyEarning);

// let name = prompt('Enter your first name');

// name.length > 7
//     ? alert('your name is long')
//     : alert('your name is short')

// let firstName2 = 'Israel';
// let lastName2 = 'Jimenez';

// firstName2.length > lastName2.length
//     ? alert('Your first name, ' + firstName2 + ' is longer than your family name, ' + lastName2)
//     : alert('Your first name, ' + firstName2 + ' isn\'t longer than your family name, ' + lastName2)

// let myAge = 250;
// let yourAge = 21;

// myAge > yourAge
//     ? console.log('I am ' + (myAge - yourAge) + ' years older than you.')
//     : console.log('You are ' + (yourAge - myAge) + ' years older than me.')

// let by = prompt('Enter birth year');
// let actualYear = new Date().getFullYear();
// let age2 = actualYear - Number(by);

// age2 >= 18
//     ? console.log("You are " + age2 + '. You are old enough to drive')
//     : console.log("You are " + age2 + '. You will be allowed to drive after ' + (18 - age2) + ' years.')

// let yearsYouLive = prompt('Enter number of years you live');
// let secondsLiving = Number(yearsYouLive) * 365 * 24 * 60 * 60;

// alert('You lived ' + secondsLiving + ' seconds');

let actualYear2 = new Date().getFullYear();
let month = new Date().getMonth();
let day = new Date().getDate();
let hour = new Date().getHours();
let minutes = new Date().getMinutes();

month += 1;
month < 10
    ? month = '0' + month 
    : month

day < 10
    ? day = '0' + day 
    : day

console.log(`${actualYear2}-${month}-${day} ${hour}:${minutes}`);
console.log(`${day}-${month}-${actualYear2} ${hour}:${minutes}`);
console.log(`${day}/${month}/${actualYear2} ${hour}:${minutes}`);