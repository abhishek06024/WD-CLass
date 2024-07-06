'use strict'
// if
// if else
// else if else
// nested if
// switch
// break
// continue

// General Syntax
// if(condition){
//     body
// }

let a= 10
let b =50;

if(a>b){
    console.log("a is greater");
}
else{
    console.log("b is greater");
}

let lassi_brand='verka';

if(lassi_brand=='verka'){
    console.log("Buy Verka Lassi");
}
else if(lassi_brand=='amul'){
    console.log("Buy Amul Lassi");
}
else if(lassi_brand== "paji"){
    console.log("Buy Paji Lassi");
}
else{
    console.log("Go back muskan");
}

let is_available = false;
let price=20;

if(is_available){
    if (lassi_brand=='verka') {
        if(price>=20){
            console.log("Buy 20 rupee packet");
        }
        else{
            console.log('no need to buy');
        }
    }
    else if(lassi_brand=='amul'){
        console.log("Buy 15 rupee packet");
    }
    else if(lassi_brand== "paji"){
        console.log("Buy 10 rupee packet");
    }
    else{
        console.log("No Brand Found");
    }
}
else{
    console.log("Go to home No lassi found");
}

// switch Statment

switch (lassi_brand) {
    case "verka":
        console.log("Verka brand Found");
        break;
    case "amul":
        console.log("Amoul brand Found");
        break;
    case "paji":
        console.log("Paji brand Found");
        break;

    default:
        console.log("Nothing Found");
        break;
}

// looping Ststement

// for while do while

// General Syntax
// for(variable; condition; increment/decrement){
//     body 
//     statements
// }



for(let i=0; i<=10;i++){
    console.log(i);
    console.log('hey Aksha');
}

let j=10;
while (j>=0) {
    console.log(j);
    
    j--;
}

let k = 100;
do {
    console.log(k);
    k--;
} while (k>=1);

let array= [10,20,30,40,50,"Muskan",70,80,90,100]
for (let index = 0; index < array.length; index++) { 
    console.log(array[index]); 

    
    
}
