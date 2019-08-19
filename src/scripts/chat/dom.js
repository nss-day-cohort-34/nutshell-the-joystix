import chatHTMLObj from "./factory.js"

const renderChatComponent = (messagesArray) => {
    const mainTag = document.querySelector("#main")
    mainTag.innerHTML += chatHTMLObj.createChatContainerHTML()
    const messagesTag = document.querySelector(".messages__articleTag")
    const sortedMessages = messagesArray.sort((a, b) => {
        if (a.date < b.date) {
            console.log("returning 1")
            return 1
        }
        if (a.date > b.date) {
            console.log("returning -1")
            return -1
        }
        return 0;

    })
    console.log("sortedMessages: ", sortedMessages);
    sortedMessages.forEach(message => {
        messagesTag.innerHTML += chatHTMLObj.chatMessageComponent(message)
    })
}

export default renderChatComponent