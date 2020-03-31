"use strict";

let money = prompt("What is your budget for the month?"),
    time = prompt("Enter a date in the format YYYY-MM-DD"),
    item = prompt("Введите обязательную статью расходов в этом месяце"),
    cost = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    data: time,
    expenses: {
        item: cost
    },
    optionalExpenses: null,
    income: null,
    saving: false
};

alert("Your budget for one day - " + money / 30);

