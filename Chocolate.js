# Chocolate-Ivan-Byruy
const price = 1;
const pack = 3;

let balance = 44;
let given_pack = 0;

let chocolate = 0;

for(let i = balance; i >= price; i-=price){
    chocolate++;
    given_pack++;
}

let j;
for(j = given_pack; j >= pack; j-=pack){
    chocolate++;
}
given_pack = j;

console.log("Шоколада = " + chocolate + " Обвёрток = " + 
