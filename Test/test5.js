'use strict'

// First test

alert(alert(1) || 2 || alert(3)); // 1,2

// Second test

alert(`${"Second test - "} ${1 && null && 2}`); // null

// Third test

alert(alert(1) && alert(2)); // 1, undefined

// Fourth test

alert(null || 2 && 3 || 4); // 3

// First task

let age = prompt("Enter your age");

if (age >= 14 && age <= 90) {
    alert("In of range");
} else {
    alert("Out of range")
}

// Second task

let age = prompt("Enter your age");

if (age <= 14 || age >= 90) {
    alert("In of range");
} else {
    alert("Out of range")
}

if (!(age >= 14) || !(age <= 90)) {
    alert("In of range");
} else {
    alert("Out of range")
}

if (!(age >= 14 && age <= 90)) {
    alert("In of range");
} else {
    alert("Out of range")
}

// Third task

if (-1 || 0) alert( 'first' );// will work
if (-1 && 0) alert( 'second' ); // won't work
if (null || -1 && 1) alert( 'third' );// will work

//Fourth task

let userLogin = prompt("Who`s there?"),
    userPassword;

if (userLogin == '' || userLogin == null) {
    alert("Canceled");
} else if (userLogin == "Admin") {


    userPassword = prompt("What`s your password?");
    if (userPassword == '' || userPassword == null) {
        alert("Canceled");
    } else if (userPassword == "Chief") {
        alert("Welcome to system!");

    } else {
        alert("Wrong password!");
    }


} else {
    alert("I don`t know you");
}