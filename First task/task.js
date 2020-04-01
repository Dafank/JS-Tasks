"use strict";

let money = +prompt("What is your budget for the month?"),
    time = prompt("Enter a date in the format YYYY-MM-DD");

let appData = {
    budget: money,
    data: time,
    expenses: {},
    optionalExpenses: null,
    income: null,
    saving: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");

    if (typeof (b) != null && typeof (a) != null &&
        a != '' && b != '' && a.length < 50 && !Number.isNaN(b)) {
        appData.expenses[a] = b;
    } else {
        i--;
    }
}

appData.moneyPerDay = Math.floor(appData.budget / 30);

alert("Your budget for one day - " + appData.moneyPerDay);

if (appData.moneyPerDay < 200) {
    alert("Minimum level of prosperity");
} else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 2000) {
    alert("Average level of prosperity");
} else if (appData.moneyPerDay > 2000) {
    alert("High level of prosperity");
} else {
    alert("Something going wrong!")
}