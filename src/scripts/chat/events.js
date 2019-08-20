import chatAPI from "../chat/data.js"
import chatHTMLObj from "../chat/factory.js"

const chatEvents = {
    registerListeners: () => {
        const chatSection = document.querySelector(".chat__section")
        // ==================
        // CREATE New Message
        // ==================
        chatSection.addEventListener("click", event => {
            if (event.target.id.startsWith("sendMessage")) {
                // create new object to post to API from user input
                const newMessageObj = {
                    userId: parseInt(sessionStorage.getItem("activeUser")),
                    message: event.target.previousElementSibling.value,
                    date: new Date().toLocaleString()
                }
                // Clear the input
                event.target.previousElementSibling.value = ""
                // POST the message to the API
                chatAPI.addMessage(newMessageObj)
                    .then(chatAPI.getChatMessages)
                    .then(parsedMessages => {
                        const messagesTag = document.querySelector(".messages__articleTag")
                        // Clear the messages container
                        messagesTag.innerHTML = ""
                        // Render all of the updated messages to the container
                        parsedMessages.forEach(message => {
                            messagesTag.innerHTML += chatHTMLObj.chatMessageComponent(message)
                        })
                    })
                    // ================
                    // EDIT START
                    //=================
            } else if (event.target.id.startsWith("edit__button")) {
                const messageId = event.target.id.split("--")[1]
                // Get the Div element that wraps the indivual message
                const messageDiv = event.target.parentElement
                // get the message by it's unique id and render am edit form to the parent div
                chatAPI.getMessageById(messageId)
                    .then(parsedMessage => {
                        messageDiv.innerHTML = chatHTMLObj.editMessageComponent(parsedMessage)
                    })
                    // ====================
                    // SAVE Edited Message
                    // ====================
            } else if (event.target.id.startsWith("save__button")) {
                const messageDiv = event.target.parentElement,
                    messageId = parseInt(event.target.id.split("--")[1]),
                    messageContent = event.target.previousElementSibling.value,
                    userId = parseInt(event.target.previousElementSibling.previousElementSibling.previousElementSibling.id.split("--")[1]),
                    date = event.target.previousElementSibling.previousElementSibling.textContent
                    // Create an object to PUT to the Api from the user's input
                const updatedMessage = {
                    id: messageId,
                    userId: userId,
                    message: messageContent,
                    date: date
                }
                // PUT it in the API
                chatAPI.editMessage(updatedMessage)
                    .then(() => {
                        // get the new message
                        chatAPI.getMessageById(messageId)
                        // render it to the container div
                            .then(parsedMessage => {
                                messageDiv.innerHTML = chatHTMLObj.chatMessageComponent(parsedMessage)
                            })
                    })
            }
        })
    }
}

export default chatEvents