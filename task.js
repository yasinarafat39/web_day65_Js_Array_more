



/**
 * Task - 1
 * Write a JavaScript code to reverse the array colors without using the reverse method.
 *
 * Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
 *
 * Output: ['orange', 'yellow', 'green', 'blue', 'red']
 *
 */

const colors = ["red", "blue", "green", "yellow", "orange"];
const emptyColors = [];
for (color of colors) {
  emptyColors.unshift(color);
}

console.log(emptyColors); // [ 'orange', 'yellow', 'green', 'blue', 'red' ]







/**
 * Task - 2
 * Write a JavaScript code to get the even numbers from an array using any looping technique.
 *
 * Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
 *
 * Output: [12, 98, 76, 46]
 */

const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];

for (num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

console.log(evenNumbers); // [ 12, 98, 78, 46 ]










/**
 * Task - 3
 * Use a for...of loop to concatenate all the elements of an array into a single string.
 *
 * Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
 *
 * Output: 'TomTimTinTik'
 *
 */

const arr3 = ["Tom", "Tim", "Tin", "Tik"];
let emptyStr = "";
for (item of arr3) {
  emptyStr += item;
}

console.log(emptyStr); // TomTimTinTik









/**
 * Task - 4
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output 
 *
 * 
 * Input: const statement = 'I am a hard working person'
    Output:'person working hard a am I'


 */
const str = "I am a hard working person";

const reversedStr = str.split(" ").reverse().join(" ");
console.log(reversedStr); // person working hard a am I
