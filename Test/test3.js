'use strict'

let some = 
{
    0:5 > 4,//true
    1:"ананас" > "яблоко",//false
    2:"2" > "12",//true?
    3:undefined == null,//true
    4:undefined === null,//false
    5:null == "\n0\n",//false
    6:null === +"\n0\n",//false
}

for(let i=0;i<7;i++)
{
    console.log(`${i} - ${some[i]}`);
}