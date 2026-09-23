// LOCALSTORAGE...

// let testing = "Testing name";

// let testingObj = {
//     name: "Testing",
//     namer: "Tester"
// }
// testingObj = JSON.stringify(testingObj);

// localStorage.setItem("userApp", testingObj);

// let localGet = localStorage.getItem("userApp");
// localGet = JSON.parse(localGet);
// console.log(localGet);

// localStorage.removeItem("userApp");



// ASSIGNMENT...

// 1. Create a user

let users = JSON.parse(localStorage.getItem("userApp")) || [];

let content = document.getElementById('content');

function saveUser () {
    localStorage.setItem("userApp", JSON.stringify(users));
}

function createUser() {
    // Collect the user data...
    let firstname = prompt("Please enter your First name:");
    let lastname = prompt("Please enter your Last name");
    let username = prompt("Please enter your username");

    let user;


    // Validate the user data...

    let errors = false;

    if (!validateInput(firstname)) {
        alert("Empty First name not allowed, please try again!");
        errors = true;
    }

    if (!validateInput(lastname)) {
        alert("Empty Last name not allowed, please try again!");
        errors = true;
    }

    if (!validateInput(username)) {
        alert("Empty Username not allowed, please try again!");
        errors = true;
    } else if (checkUsernameExists(users, username)) {
        alert("Username already exists, please try again!");
        errors = true;
    }

    if (!errors) {
        user = {
            firstname,
            lastname,
            username: username.toLowerCase(),
        }

        users.push(user);

        saveUser();
    }

    // console.log(user);

}




function editUser() {

    if (confirm("Are you sure?")) {

        let username = prompt("Please enter the username:");

        let user;

        if (!validateInput(username)) {
            return alert("Empty Username not allowed, please try again!");
        } else if (!checkUsernameExists(users, username)) {
            return alert("User does not exist, please try again!");
        } else {
            user = checkUsernameExists(users, username);
        }

        // console.log(user);
        

        // Collect the user data...
        let firstname = prompt("Please enter your First name:", user.firstname);
        let lastname = prompt("Please enter your Last name", user.lastname);



        // Validate the user data...

        let errors = false;

        if (!validateInput(firstname)) {
            alert("Empty First name not allowed, please try again!");
            errors = true;
        }

        if (!validateInput(lastname)) {
            alert("Empty Last name not allowed, please try again!");
            errors = true;
        }
        

        if (!errors) {

            user.firstname = firstname;
            user.lastname = lastname;

            saveUser();
        }
    }
    

}





function findUser() {
    let username = prompt("Please input the username!");

    if (validateInput(username)) {
        username = username.toLowerCase();

        let user = checkUsernameExists(users, username);

        // console.log(user);
        

        if (user) {
            let showUser = confirm("User found, do you want to didplay user data?");

            if (showUser) {
                let userData = `
                    <b>FOUND USER</b><br>
                    Firstname: ${user.firstname}<br>
                    Lastname: ${user.lastname}<br>
                    Username: ${user.username}
                `;

                content.innerHTML = userData;
            }
        } else {
            alert("User not found!");
        }
    } else {
        alert("Empty Username not allowed, please try again!");
    }
}






function showAllUsers () {
    // console.log(users);

    content.innerHTML = "<h3>ALL USERS</h3> ========================================" + users.map(user => `
        <div>
            <b>Username: ${user.username}</b>
            <p>First name: ${user.firstname}</p>
            <p>Last name: ${user.lastname}</p>
            <p>========================================</p>
        </div>
        `).join("");
    
}




function deleteUser() {

    if (confirm("Are you sure?")) {

        let username = prompt("Please enter the username:");

        let user;

        if (!validateInput(username)) {
            return alert("Empty Username not allowed, please try again!");
        } else if (!checkUsernameExists(users, username)) {
            return alert("User does not exist, please try again!");
        } else {
            user = checkUsernameExists(users, username);
        }

        // console.log(user);
        
        let indexArr = users.indexOf(user);

        // Using Splice...
        // users.splice(indexArr, 1);

        // Using filter...
        users = users.filter(item => item !== user);

        // console.log(indexArr);
        
        
        
        saveUser();

    }
    

}




function clearPage() {
    content.innerHTML = "";
}