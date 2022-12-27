// 4.9 version
// show error - Did you mean 'Number.isNaN(...)'?

console.log(NaN == 0); // false
console.log(NaN === 0); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(NaN != 0); // true
console.log(NaN !== 0); // true

console.log(NaN != NaN); // true
console.log(NaN !== NaN); // true
