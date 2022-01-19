// const myObj = {
//   name: 'Chaz',
//   age: '3000',
//   location: 'Nashville',
//   favBanc: 'Vulfpeck',
// };

// const objArr = [
//   {
//     name: 'Supreme',
//     age: '61',
//     location: 'Queens',
//   },
//   {
//     name: 'Big U',
//     age: '56',
//     location: 'Los Angeles',
//   },
//   {
//     name: 'Haitian Jack',
//     age: '63',
//     location: 'Haiti',
//   },
// ];
// const numbers = [15, 22, 10, 14, 15, 10, 17];

let phrase = 'Once upon a time, in a land far far away...';

console.log(_.startsWith(phrase, 'Once'));
console.log(_.startsWith(phrase, 'once'));
console.log(_.startsWith(phrase, 'land', 7));
console.log(_.startsWith(phrase, 'land', 5));
console.log(_.startsWith(phrase, 'away', 9));
