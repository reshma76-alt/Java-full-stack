// let a=10;
// switch(a){
//     case 20:
//         console.log("value is 20");
//     case 15:
//         console.log("value is 15");
//     case 10:
//         console.log("value is 10");

// }
// let student=['reshu','ramya','sanu']
//using destructuring
// let[,,third]=student;
// console.log(third);
//Deafult value;
// const student={name:'reshu',age:'20',city:'Rajampet'};
//object destructuring
// const{name:fullname,age:years,city:district}=student;
// console.log(fullname,years,district);
// const a=[1,2,3];
// console.log(a);
// console.log(...a);
// let boys=['ayan','raju','prabhas','ram'];
// let girls=['reshu','sam','sanu','ramya'];
// let student=[...boys,...girls];
// console.log(student);
const colors={color1:'red',color2:'green',color3:'blue'};
const shape={color1:'square',shape2:'circle'};
const combined={...colors,...shape};
console.log(combined);