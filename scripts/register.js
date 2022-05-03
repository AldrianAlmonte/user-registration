// //create a User Constructor
// let users = [];
// 

class User {
    constructor(fname, lname,email,password){
    this.firstName=fname;
    this.lastName=lname;
    this.email=email;
    this.password=password;
    // this.gender=gender;
    // this.age=age;
    // this.address=addrs;
    }
}

function isValid(user){
    //return false when user is not valid
    //return true when user is valid
    let valid=true;
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        console.log("Add an email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Add a password");
        $("#txtEmail").addClass("input-error");

    }
    return valid;
}
function validatePass(){
    //get the value from the input
    let txtPass=$("#txtPassword");
    let password=txtPass.val();
    if(password.length<6){ //compare if the password is < 6 characters? (if statement)
      txtPass.css("background","#ff9898");//jquery function to change css
      displayError("the password is too short!");
    }else{
        txtPass.css("border","2px solid green");

    }
    //$ function to change the css
        
}


function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
}
function hideError(){
    $("#alertError").addClass("hide");
}

function register(){
    let inputfName = $("#txtFirstName").val();//getting the value
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    // let inputGender = $("#txtGender").val();
    // // let inputAge = $("#txtAge").val();
    // // let inputAddress = $("#txtAddress").val();


    let newUser = new User (inputfName,inputlName,inputEmail,inputPassword);
    if(isValid(newUser)){
        saveUser(newUser);//this fn is in the storeManagement

        // clearInput();
    }
    
}
// function clearInput(){
//     inputfName.val="";
//     inputlName.val="";
//     inputEmail.val="";
//     inputPassword.val="";
// }

function init(){
    console.log("Register");
    //hook events
    $("#txtPassword").keyup(validatePass);//it is executed everytime that the key is up
  
}
window.onload=init;