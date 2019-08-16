import API from "./data.js"

const addUser = () => {
    const mainTag = document.querySelector("#main")
    mainTag.addEventListener("click", event => {
        if (event.target.id.startsWith("addUser")) {
            const firstNameInput = document.querySelector("#firstName")
            const lastNameInput = document.querySelector("#lastName")
            const emailInput = document.querySelector("#email")
            const usernameInput = document.querySelector("#username")
            const passwordInput = document.querySelector("#password")

            API.getUsersData()
            .then(parsedUsers => {
                if(parsedUsers.find(user => user.username.toLowerCase() === usernameInput.value.toLowerCase())) {
                    alert("Username already exists")
                } else if (parsedUsers.find(user => user.email.toLowerCase() === emailInput.value.toLowerCase())){
                    alert("Email already exists")
                } else if(usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "" || firstNameInput.value === "" || lastNameInput.value === "") {
                    alert("Please fill out all fields")
                } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))){
                    alert("Please enter a valid email address")
                }
                else {
                    mainTag.innerHTML = ""
                    //Create a new user Object
                    const newUserObj = {
                        username: usernameInput.value,
                        email: emailInput.value,
                        password: passwordInput.value,
                        firstName: firstNameInput.value,
                        lastName: lastNameInput.value
                    }
                    // Post it to the Users Array
                    API.addUser(newUserObj)
                    .then(user => {
                        // Set session storage to store logged in user's id
                        sessionStorage.setItem("activeUser", user.id)
                    })
                    // Render Home Page
                }
            })
        }
    })
}

export default addUser
