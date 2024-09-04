/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
*/ 


const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for(friend of friends){
    console.log(friend);
}


for(let i = 0; i < friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}


const numbers = [45, 8478, 545, 84, 645, 415, 8, 454, 5487];

let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}

