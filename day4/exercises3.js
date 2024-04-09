let daysMonth = prompt('Enter a month');
let daysYear = prompt('Enter a year');
daysMonth.toLowerCase();
daysYear = Number(daysYear);

switch (daysMonth) {
    case 'january':
        console.log('January has 31 days.');
        break;
    case 'february':
        (daysYear % 4) == 0 
            ? console.log('January has 29 days.')
            : console.log('January has 28 days.');
        break;
    case 'march':
        console.log('January has 31 days.');
        break;
    case 'april':
        console.log('January has 30 days.');
        break;
    case 'may':
        console.log('January has 31 days.');
        break;
    case 'june':
        console.log('January has 30 days.');
        break;
    case 'july':
        console.log('January has 31 days.');
        break;
    case 'august':
        console.log('January has 31 days.');
        break;
    case 'september':
        console.log('January has 30 days.');
        break;
    case 'october':
        console.log('January has 31 days.');
        break;
    case 'november':
        console.log('January has 30 days.');
        break;
    case 'december':
        console.log('January has 31 days.');
        break;
    default:
        break;
}
