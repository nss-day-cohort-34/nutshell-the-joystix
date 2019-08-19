import chatAPI from "../chat/data.js"
import chatHTMLObj from "../chat/factory.js"

const chatEvents = {
    registerAddMessage: () => {
        const chatSection = document.querySelector(".chat__section")
        chatSection.addEventListener("click", event => {
            if (event.target.id.startsWith("sendMessage")) {

                const newMessageObj = {
                    userId: parseInt(sessionStorage.getItem("activeUser")),
                    message: event.target.previousElementSibling.value,
                    date: new Date()
                }

                chatAPI.addMessage(newMessageObj)
                    .then(chatAPI.getChatMessages)
                    .then(parsedMessages => {
                        const messagesTag = document.querySelector(".messages__articleTag")
                        messagesTag.innerHTML = ""

                        parsedMessages.forEach(message => {
                            messagesTag.innerHTML += chatHTMLObj.chatMessageComponent(message)
                        })
                    })
            }
        })
    }
}

export default chatEvents