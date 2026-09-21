function checkUsernameExists (users, username) {
    // console.log(users);
    
    if (users.length > 0) {
        console.log("Users is not empty");
        
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            
            if (user.username == username) {
                // console.log(user);
                
                return user;
            }
        }
    } else {
        console.log("Users is empty");
        
        return false;
    }
    
}




function validateInput (data) {

    data = data.trim();
    
    if (data == null || data == undefined || data == "") {
        return false;
    }

    return true;
}



