let firstName = 'Israel', lastName = 'Jimenez', country = 'Mexico', 
city = 'Mazatlan', age = 21, isMarried = false, year = new Date().getFullYear(); 

console.log(typeof firstName === typeof lastName && typeof country === typeof city 
            && typeof age === typeof year && typeof isMarried === typeof true);
console.log(typeof '10' == 10);
console.log(parseInt('9.8') == 10);

console.log(5 > 3 && 'a' === 'a' && '8' == 8);
console.log(5 > 9 && 'a' === 'b' && '8' == 9);
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false
console.log('python'.length != 'jargon'.length); // false

console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))); // false

let fecha = new Date();
console.log(fecha.getFullYear());
console.log(fecha.getMonth());
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getTime());