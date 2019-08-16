import API from "../data/data.js"

const userLogin = () => {
    const mainTag = document.querySelector("#main")
    mainTag.addEventListener("click", event => {
        if (event.target.id.startsWith("userLog")) {
            //References to login DOM nodes
            const loginUsernameInput = document.querySelector("#log__username")
            const loginPasswordInput = document.querySelector("#log__password")
            //Get user data
            API.getUsersData()
                //THEN Authenticate login
                .then(parsedUsers => {
                    if (loginUsernameInput.value === "" || loginPasswordInput.value === "") {
                        alert("Please fill out all fields")
                    } else {
                        let foundUser = parsedUsers.find(user => user.username.toLowerCase() === loginUsernameInput.value.toLowerCase())
                        if (foundUser === undefined) {
                            alert("No user found")

                        } else if (foundUser.password !== loginPasswordInput.value) {
                            alert("Incorrect password. Try again.")
                        } else {
                        //THEN clear out DOM
                            mainTag.innerHTML = ""
                            // Set session storage to store logged in user's id
                            sessionStorage.setItem("activeUser", foundUser.id)
                            // Render Home Page

                            //news


                            //end news

                            //events


                            //end events

                            //tasks


                            //end tasks

                            //chat


                            //end chat
                        }
                    }
                })
        }
    })
}

export default userLogin