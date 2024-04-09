hour < 10
    ? hour = '0' + hour 
    : hour

minutes < 10
    ? minutes = '0' + minutes 
    : minutes

console.log(`${actualYear2}-${month}-${day} ${hour}:${minutes}`);