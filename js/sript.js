"use strict";
console.log("учим js");
['учим',"js"].forEach(alert);
console.log('учим' + 'js');
let num =4;
console.log(num);
'учим' + 'js';
let num1 = 'учим js';
console.log(num1);
function name(){
    console.log('учим');
    console.log('js');
}
name();
let str = 'текст';
let str1 = 'тескст';
document.getElementById('text').innerHTML =
 'текст для поля';
let myLifeStyle = 'фрилансер по жизни';
let myName = 36;
let myMessage = 'живи, а работой в свободное время!';
let myAge = 36;
let myAge4 = 36;
let myNewAge =18;
 let myAge5 = myNewAge;
console.log(myAge);
let myAge3 = 36;
console.log(myAge);
function textBlock(){
    let myAge =36;
    console.log(myAge)
}
textBlock();
const Block_SIZE =25;
const COLOR_RED = "#F00"
const summSizes = 25 + 30;
function textBlock(){
    let myAgelet =36;
}
textBlock();
function textBlockVar(){
    var myAgeVar = 36;
}
textBlockVar();
let userAge = 30 - 6;
let  h="gty";
let  y="gty";
let userHeight = h - y
let userAge1 =30 - 6;
let userCash =-800;
let x;
x = 5 + 8;
console.log('результат:${x}');
let resuLtOne='фрилансер' + '' + 'по' + '' + "жини"
let resuLtTwo = "фрилансер"+ 58;
console.log(resuLtTwo);
console.log(typeof resuLtTwo);
let resuLtThree = 58 + "фрилансер";
console.log(resuLtThree)
let resuLtFour = 2 +"2";
console.log(resuLtFour);
let resuLtFive = 58 - 20 + "фрилансер";
console.log(resuLtFive);
let resuLtOne1 ="25" - 5;
console.log(resuLtOne1);
console.log(typeof resuLtOne1);
let resuLtTwo1 = 10 * "80";
console.log(resuLtTwo1);
console.log(typeof resuLtTwo1);
let resuLtThree1 = 3* "фрилансер";
console.log(resuLtThree1);
console.log(typeof resuLtOne);
let resuLtOne2 = +"25";
console.log(resuLtOne2);
console.log(typeof resuLtOne2);
let resuLtTwo2 = +10;
console.log(resuLtTwo2);
console.log(typeof resuLtTwo2)
let users ="25";
let admins ="10";
console.log(users + admins);
console.log(+users + +admins);
console.log(Number(users)+Number(admins));
let resuLtOne3 = 2 -1 * 5;
console.log(resuLtOne3);
let resuLtTwo3 = (2 - 1) * 5;
console.log(resuLtTwo3);
let resuLtThree2 = 2- 1 +5;
console.log(resuLtThree2);
let a = 1 + 2;
let b = 2;
let resuLt = 8 -(a = b + 3);
console.log("результат" + a);
console.log("результат" + resuLt);
let users1 = 5;
console.log(users1);
users1 += 1 + 2;
console.log(users1);
let addUser = 2;
addUser++;
console.log(addUser);
let removerUser = 2;
removerUser--;
console.log(removerUser); 
let usersCounter = 0;
let newUsers = ++usersCounter;
console.log(newUsers);
let usersCounter1 = 0;
let newUsers1 =2 * ++usersCounter;
console.log(newUsers1);
let usersCounter2 = (8 + 2, 19 + 1);
console.log(usersCounter2);
console.log('Б'>'А');
console.log('СРИПТ'>'СКРИПКА');
console.log('СЛАИДЕР'>'СЛАИД');
console.log('ФРИЛАНСЕР'>'ФРИЛАНСЕР'); 
console.log('58' > 10);
console.log('007' == 7);
console.log(true == 1);
console.log(false == 0);
let itemA = 0;
let itemB = "0";
console.log(Boolean(itemA));
console.log(Boolean(itemB));
console.log(itemA == itemB);
console.log(0 === false);
console.log('007'=== 7);
console.log ('58'!== 58);
console.log(null === undefined);
console.log(null == undefined);
console.log (null > 0);
console.log (null == 0);
console.log(null >=0);
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);
console.log(1||0);
console.log(true || "фрилансер");
console.log(null || 58);
console.log(null || '' || 0);
console.log(undefined || "фрилансер" || null || 0);
console.log('фрилансер'&& 0 && 2 && 3);
console.log(1 && 2 && null && 3);
console.log('15' && '42');
console.log(1 && 0 || 2 && 1);
let users2 = 1;
(users2 > 0) && console.log(`пользователей ${users2}`);
console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрилансер');
console.log(!true &&  58 || 18 && !1);
console.log(!!'фриласер');
console.log(Boolean('фрилансер'));
let name1;
console.log(name ?? "Без имени ");
let message = 'привет, фрилансер';
if(2 > 1){
    console.log(message);
}
let message1 = "привет, фрилансер";
let first = 5;
let second = 5;
if (first === second){
    console.log(message1);
}
let message2 ="привет, фрилансер";
let Number1 = 10;
if (Number1 > 1) {
    console.log(message2)
} else {
    console.log('условие не выполненре:(');
}
let message3 = "привет";
let messageEnd;
if (5 > 1) {
    messageEnd = ", Вася!";
} else{
    messageEnd = ", Оля!";
}
message3 += messageEnd;
console.log(message3);
let num2 = 0;
while (num2 < 5){
    console.log(num2);
    num2++; 
}
let num3 = 5;
while(num3){
    console.log(num3);
    num3--;
}
let num4 = 0;
do{
    console.log(num4);
    num4++;
} while (num4 < 5); 
for (let num5 = 0;num5 < 5;num5++) {
 console.log(num5);
}
let num6 =0 
for (;num6 < 5; num6++) { 
    console.log(num6);
    if(num ==2) break;
}
console.log(`Забота окончена,unm6 = ${num}`);
let num7 =0 
for (;num7 < 5; num7++) {
    if(num ==2) continue;
    console.log(num7)
}  
function getSumm() {
let numOne , numTwo;
function getNumTwo(){
    numTow = 2;
}
getNumOne();
getNumTwo();
let numSumm = numOne + numTwo;
console.log(numSumm); 
}
function getSumm2 (numOne, numTwo){
    return numOne + numTwo;
};
function getSumm (numOne, numTow) {
    let numSumm = numOne + numTow;
    return numSumm;
};
let funcRezult = getSumm2(1 , 2);
console.log(`сума: ${funcRezult}`);
function getSumm2 (numOne, numTwo){
    return numOne + numTwo;
};
const x1 = getSumm2(5,5);
let showMessage = function(){
   console.log('привет!');
};
function getSumm3(){
    let summ = 1 + 2;
};
let someVar= getSumm3;
someVar();
getSumm3();