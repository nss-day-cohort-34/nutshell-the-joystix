import getUsersData from "./data.js"

const addUser = () => {
    const mainTag = document.querySelector("#main")
    mainTag.addEventListener("click", event => {
        if (event.target.id.startsWith("addUser")) {
            const firstNameInput = document.querySelector("#firstName")
            const lastNameInput = document.querySelector("#lastName")
            const emailInput = document.querySelector("#email")
            const usernameInput = document.querySelector("#username")
            const passwordInput = document.querySelector("#password")
            console.log("firstNameInput: ", firstNameInput.value);
            console.log("lastNameInput: ", lastNameInput.value);
            console.log("emailInput: ", emailInput.value);
            console.log("passwordInput: ", passwordInput.value);
            console.log("usernameInput: ", usernameInput.value);
            mainTag.innerHTML = ""

            getUsersData()
            .then(parsedUsers => {
                console.log(parsedUsers)
            })
        }
    })
}

export default addUser
