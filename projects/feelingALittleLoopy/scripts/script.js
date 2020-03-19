// let i = 0;
// while (i < 3) {
// console.log("I am starting to feel a little loopy");
// i++;
// }

// let i = 0;
// while (i <= 20) {
//     if (i % 2 === 0) {
//     console.log(`${i} is even!`);
//     } else {
//         console.log(`${i} is odd!`);
//     }
//     i++;
// }

// let i = 0;
// while (i <= 10) {
//     result = i * 9;
//     console.log(`${i} * 9 = ${result}`);
//     i++;
// }


// let i = 36;
// while (i > 1) {
//     // result = (i / 2);
//     console.log(i);
//     i = i / 2
//     // i /= 2
// }


// let i = 0;
// while (i <= 80) {
//     result = 80 - i;
//     console.log(`There is only room for ${result} books on the shelf.`);
//     i++;
// }


// Bonus

let i = 1;
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`FizzBuzz`); 
    } else if (i % 3 === 0) {
        console.log(`Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Buzz`); 
    } 
    else {
        console.log(i);
    }
    i++;
}