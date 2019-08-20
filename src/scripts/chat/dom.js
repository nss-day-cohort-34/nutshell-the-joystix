import chatHTMLObj from "./factory.js"

const renderChatComponent = (messagesArray) => {
    const mainTag = document.querySelector("#main")
    mainTag.innerHTML += chatHTMLObj.createChatContainerHTML()
    const messagesTag = document.querySelector(".messages__articleTag")
    const sortedMessages = messagesArray.sort((a, b) => {
        if (a.date < b.date) {
            return -1
        }
        if (a.date > b.date) {
            return 0
        }
        return 1

    })
    sortedMessages.forEach(message => {
        messagesTag.innerHTML += chatHTMLObj.chatMessageComponent(message)
    })
}

export default renderChatComponent