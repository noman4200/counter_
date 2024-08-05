/////////////////////////////////////////variables/////////////////////////////////////////////////////////



// let x="Noman";
// let age=34;
// // console.log(x);4
// console.log(typeof age);
// console.log(`you are ${age} year old`);
// console.log(`your name is ${x} Ali`);

// let x=true;
// console.log(`Bro is online:${x}`)
// let fullName="Noman";
// let age=25;
// let x=true;

// document.getElementById("para1").textContent=`Your name is ${fullName}`;
// document.getElementById("para2").textContent=`Your age is ${age}`;
// document.getElementById("para3").textContent=`${fullName} is online : ${x}`;


//////////////////////////////////////////////////operators/////////////////////////////////////////////
// let x=30;
// // x=x*4;
// // x=x**4;

// x+=1;//its first add than display answer
// x*=3;//its first multiply  than display answer
// console.log(x);


//////////////////////////////////////////////how to accept user input///////////////////////////////////


////Easyway window.prompt
////advance way===html textbox


// let x;
// //  x=window.prompt("what's your username :");
// //  console.log(`your's name is: ${x}`);


// document.getElementById("button").onclick=function(){
    
//         x=document.getElementById("text1").value;
//         document.getElementById("h1").textContent=`Hello ${x}`;
//         console.log(`Username is :${x}`);
//         // document.write(`Username is :${x}`);
    
// }
///////////////////////////////////////////datatype conversion/////////////


// let x=window.prompt("how old you are?");if i put 23 
// x+=1;
// document.write(x ,  typeof x); its answer is 231 string data type so we need to convert it.

// let x=window.prompt("how old you are?");
// x=Number(x)
// x+=1;
// document.write(x ,typeof x); //now it give answer24


////////////////////////////////////////////////constant////////////////


// let radius;
// const PI=3.14;
// document.getElementById("btn1").onclick=function(){
//     radius=document.getElementById("inp").value;
//     radius=Number(radius);

//     circum=2*PI*radius;
//     document.getElementById("h3").textContent=circum+"cm";
// }


///////////////////////////////////////// counter /////////////////////////////////////////////

let x=0;
document.getElementById("Increase").onclick=function(){
    x++;
    document.getElementById("lab").textContent=x;
    
}
document.getElementById("Decrease").onclick=function(){
    x--;
    document.getElementById("lab").textContent=x;
    
}
document.getElementById("Reset").onclick=function(){
    x=0;
    document.getElementById("lab").textContent=x;
    
}