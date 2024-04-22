let anyNumberCharacters = [];
let index = 0;

do {
    anyNumberCharacters.push(Math.random().toString(36).slice(2, 3));
    index++;
} while (index < 7);

console.log(anyNumberCharacters.join(''));

sixCharacters = [];

sixCharacters.push('#' + Math.random().toString(16).slice(2,8));

console.log(sixCharacters);

console.log(`rgb(${1},${1},${1})`);