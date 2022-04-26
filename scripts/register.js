// //create a User Constructor
// let users = [];
// 

class User {
    constructor(fname, lname,email,password,gender,age,addrs,phone,pmethod,fcolor){
    this.firstName=fname;
    this.lastName=lname;
    this.email=email;
    this.password=password;
    this.gender=gender;
    this.age=age;
    this.address=addrs;
    }
}

function register(){
    let inputfName = $("#txtFirstName").val();//getting the value
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();


    let newUser = new User (inputfName,inputlName,inputEmail,inputPassword);
    console.log(newUser);
}

function init(){
    console.log("Init function");

    //create two users and display on the console
    let user0 = new User("Ben","Sanchez","bs@bs.com","1234");
    let user1 = new User("Crystal","Garcia","cg@cg.com","4567");
    console.log(user0,user1)
}

window.onload=init;