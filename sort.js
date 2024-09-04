const persons = ["rakib", "nokib", "sakib", "akib", "dakib"];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// sort -->
const numbers = [4, 8, 7, 1, 6, 2, 9, 3, 5];
/**
 * Ascending -----> smaller to larger: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * Descending ------> larger to smaller: [9, 8, 7, 6, 5, 4, 3, 2, 1]
 */

const numbers_asc = numbers.sort();
console.log(numbers_asc); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const multipleNum = [4, 8, 7, 1, 61, 2, 21, 90, 9, 3, 5];
const multiNum_asc = [...multipleNum].sort((a, b) => a - b);
const multiNum_dsc = [...multipleNum].sort((a, b) => b - a);


console.log(multiNum_asc);
console.log(multiNum_dsc);