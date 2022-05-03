function displayUsers(usersArray){
    //travel the array
    let row;
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];//get each user
        console.log(user);
        //create row=`<>${}<>`
        row=`
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            </tr>
            `;
        console.log(row);
    $("#userstable").append(row);
    //append the user on the html table --> read jquery documentation append()
    }
    
    //display the users
}

function init(){
    console.log("listing Users");
    let users = readUsers();//this fn is on the storeManager/ getting the array
    displayUsers(users);
}
window.onload = init;