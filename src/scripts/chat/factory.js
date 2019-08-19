// factory function that takes in a current chat messages array and returns an HTML string to display the chat component to the DOM
const factoryObj = {
    createChatContainerHTML: () => {
        return `
        <section id="chat__section" class="section chat__section">
            <aside class="chat__h2">
                <h2>Chat</h2>
            </aside>
            <!-- Contains all messages -->
            <article class="messages__articleTag">

            </article>
            <aside class="addMessage__aside">
                <input type="text" name="newMessage" id="newMessage__input">
                <input type="submit" value="Send" id="sendMessage__button">
            </aside>
        </section>
        `
    },
    chatMessageComponent: (message) => {
        console.log(message)
        return `<div class="message__div">
                    <h5><ion-icon name="contact"></ion-icon>${message.user.username}</h5>
                    <h6>${message.date}</h6>
                    <p class="message__p">${message.message}</p>
                </div>`
    }
}
export default factoryObj
