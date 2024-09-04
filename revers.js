//              [9, 8, 7, 6, 5, 4, 3, 2, 1];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const revNumbers = numbers.reverse();
// console.log(revNumbers);



const reversed = [];

for(const num of numbers){
    console.log(num);
    reversed.unshift(num);
}

// console.log(reversed);


const reversed_numbers = [];
for(let i = numbers.length - 1; i >= 0; i--){ 
    reversed_numbers.push(numbers[i]);
}

console.log(reversed_numbers);