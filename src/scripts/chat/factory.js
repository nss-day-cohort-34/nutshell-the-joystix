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

        if (message.userId === parseInt(sessionStorage.getItem("activeUser"))) {
            return `<div class="message__div--${message.id}">
                        <h5>
                            <i class="fas fa-user"></i>
                            ${message.user.username}
                        </h5>
                        <h6>${message.date}</h6>
                        <p class="message__p">${message.message}</p>
                        <button id="edit__button--${message.id}" class="edit__button">Edit</button>
                    </div>`
        } else {
            return `<div class="message__div">
                        
                        <h5>
                            <i class="fas fa-user"></i>
                            ${message.user.username}
                        </h5>
                        <h6>${message.date}</h6>
                        <p class="message__p">${message.message}</p>
                    </div>`
        }
    },
    editMessageComponent: (message) => {
        return `<div class="message__div--${message.id}">
                    <h5 id="username__h5--${message.userId}">
                        <i class="fas fa-user"></i>
                        ${message.user.username}
                    </h5>
                    <h6>${message.date}</h6>
                    <textarea name="editMessageContent" id="editMessageContent__textarea" cols="30" rows="10">${message.message}</textarea>
                    <button id="save__button--${message.id}" class="edit__button">Save</button>
                </div>`
    }
}
export default factoryObj
