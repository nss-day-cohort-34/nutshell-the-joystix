// API calls to messages database
export default {
    getChatMessages: () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(response => response.json())
    },
    addMessage: (newMessage) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
            .then(response => response.json())
    }

}