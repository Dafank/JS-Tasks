'use strict'


// for (let i = 0; i < 5; i++) console.log(i); // 0,1,2,3,4
// for (let i = 0; i < 5; ++i) console.log(i); // 0,1,2,3,4

// First task

// for (let i = 2; i <= 10; i++) {
//     if(i%2 !=0)
//     {
//         continue;
//     }
//     console.log(i);
// }

//Second task

// let i=0;
// while(i<3)
// {
//     console.log(`Number ${i}!`);
//     i++;
// }

//Third task

// let userNumber;

// do
// {
//     userNumber = prompt("Enter you number more than 100");
//     alert(`${userNumber} - ${Boolean(userNumber)}`);
// }while(userNumber&& userNumber<=100);

let n = prompt("Enter your number:");

outer:
    for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue outer;
            }
        }
        alert(i);
    }


// Дописати таку ж прогу тільки без continue

// let userBrowser = prompt("Enter your browser, we will make some magic");

// if (userBrowser == "Edge") {
//     alert("You've got the Edge!");
// } else if ("Chrome" 
// || "Firefox" 
// || "Safari" 
// || "Opera") {
//     alert('Okay we support these browsers too');
// } else {
//     alert("We hope that this page looks ok!");
// }

const num = +prompt("Enter number 0 and 3");

switch (num) {
    case 0:
        alert("Your number is 0");
        break;
    case 1:
        alert("Your number is 1");
        break;
    case 2:
    case 3:
        alert("Your number is 2 or maybe 3");
        break;
}