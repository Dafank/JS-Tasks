 'use strict'

 // test - https://learn.javascript.ru/type-conversions

 let some = {
     0: "" + 1 + 0, //10
     1: "" - 1 + 0, //-1
     2: true + false, //1
     3: 6 / "3", //2
     4: "2" * "3", //6
     5: 4 + 5 + "px", //45px?
     6: "$" + 4 + 5, //$45
     7: "4" - 2,//2
     8: "4px" - 2,//NaN
     9: 7 / 0,//Infinity
     10: "  -9  " + 5,// -9 5
     11: "  -9  " - 5,//-14
     12: null + 1,//1
     13: undefined + 1,// NaN
     14: " \t \n" - 2//-2
 };

 for (let i = 0; i < 15; i++) {
     console.log(`${i} - ${some[i]}`);
 }