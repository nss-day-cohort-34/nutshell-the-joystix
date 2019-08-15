const getUserData = () => {
    return fetch("http://localhost:8080/users")
        .then(response => response.json())
}


export default {getLoggedInUserData}