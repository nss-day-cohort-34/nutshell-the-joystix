const registerBtn = document.querySelector("#register__button")

const addUser = () => {
    registerBtn.addEventListener("click", () => {
        console.log("registerBtn")
    })
}

export default addUser
