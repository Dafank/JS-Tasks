'use strict'

// First task

// let userAge = prompt("Enter your age:");

// if (userAge) alert(checkAge(userAge));

// // function checkAge(age) {
// //     return (age > 18) ? true : confirm('Parents allowed?');
// // }

// function checkAge(age)
// {
//     return (age>18) || confirm('Parents allowed?');
// }

// Second task

// function getMinValue(a,b) {
//     return (a>b) ?b :a;
// }

// console.log(getMinValue(3,3));

// Third task

// function getPowNumber(x,n) {
//     return x**n;
// }

// console.log(getPowNumber(3,3));

// let showHello = (age) => (age > 18) ? function () {
//     console.log("You are adult")
// } : console.log("You are too young");

// showHello(20, function () {
//     console.log("You are adult");
// }, function () {
//     console.log("You are too young");
// });

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    "Вы согласны?",
    () =>  alert("Вы согласились."),
    () =>  alert("Вы отменили выполнение.")
  );