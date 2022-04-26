//selecting the txtEmail with JS

// //bad practice
// document.getElementById("txtEmail");

// document.getElementById("txtEmail");

// //best practice
// //let email=document.getElementById("txtEmail");
// //selector type:
// //#id, .class, tag
// //jquery = $

// //selecting by ID
// email=$("#txtEmail").value;
// console.log(email);

//selectting by className and hiding the elements with JS
// let formControl = document.getElementsByClassName("form-control");
// for(let i=0;i<formControl.length;i++){
//     formControl[i].style.display="none";
// }

// let formControl = $(".form-control");
// formControl.hide();

// selecting by tagName
//let labels = document.getElementsByTagName("label");
// console.log(labels);
let labels = $("label");
console.log(labels);