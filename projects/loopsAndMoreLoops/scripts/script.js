for(let i = 0; i < 11; i++) {
    let msg = "The number is " + i;
    console.log(msg.toUpperCase());
}

for(let i = 5; i < 16; i+=3) {
    let msg2 = "The number is " + i;
    console.log(msg2);
}

for(let i = 40; i <=60; i+=2) {
    let msg3 = "The number is " + i;
    console.log(msg3);
}

for(let i = 100; i >= 0; i--) {
    let msg4 = "The number is " + i;
    console.log(msg4);
}


let love = "Boston CodeSquad";
love.length;
console.log(love.length);

for(let i = 0; i < love.length; i++) {
    let msg5 = "I love JavaScript"
    console.log(msg5);
}

// Bonus Problem


function oddOrEven(i) {
    for(let i = 0; i < 25; i++) {
    if (i % 2 === 0) {
        console.log( `${i} is even!`);
    } else {
        console.log(`${i} is odd!`);
    }
    }
}
console.log(oddOrEven());