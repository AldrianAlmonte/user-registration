function login(){
    //get the values from the form
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();
    //use a flag
    let flag=false;
    //get the users from LS
    let userList=readUsers();//this fn is in storeManager
    //travel the user list
    for(let i=0; i<userList.length;i++){
        //recomend
        let user=userList[i];
        if(user.email===inputEmail && user.password===inputPassword){
            flag=true;
            window.location="users.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);
        }
    }
}
function init(){
    $("#loginBtn").click(login);
}

window.onload=init;