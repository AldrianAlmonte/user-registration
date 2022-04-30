function displayUsers(usersArray){
    //travel the array
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];//get each user
        console.log(user);
        //create row=`<>${}<>`
    }
    
    //display the users

    //append the user on the html table
}
function init(){
    console.log("listing Users");
    let users = readUsers();//this fn is on the storeManager/ getting the array
    displayUsers(users);
}
window.onload = init;