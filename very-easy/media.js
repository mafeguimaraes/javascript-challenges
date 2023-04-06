/* Escreva uma função que recebe um número qualquer de inteiros como argumeto e retorne a média aritmética entre eles */

function average(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0) / numbers.length;
}

console.log(average(10, 9, 6, 8, 9, 1, 5, 7));
console.log(average(2, 5, 7, 1, -2));
console.log(average(10, 10, 10, 10, 9));
console.log(average(25, 75));
