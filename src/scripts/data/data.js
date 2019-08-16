



export default {
    getUsersData: () => {
        return fetch("http://localhost:8088/users")
            .then(response => response.json())
    },
    addUser: (newUser) => {
        return fetch("http://localhost:8088/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
    }

}
