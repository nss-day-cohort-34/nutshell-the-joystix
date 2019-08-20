
const factory = {
    createNewsContainer () {
        return `
        <section id="news__container">News</section>
        `
    },
    createNewsHTML (articleObj) {
        return `
        <section class="newsItem" id="newsItem--${articleObj.id}">
            <h2 class="name">${articleObj.title}</h2>
            <p class="info"> ${articleObj.synopsis}</p>
            <p class="info">${articleObj.date}</p>
            <a class="info" href="${articleObj.url}">link</a>
        </section>
        <section>
            <button class="edit__button" id="editArticle--${articleObj.id}">Edit</button>
            <button class="delete__button" id="deleteArticle--${articleObj.id}">Delete</button>
        </section>



        `
    },
    createAddArticleButton () {
        return `
            <section>
                <button id="addArticle__button">+</button>
            </section>
        `
    },
    createNewArticleInputs () {
        return `
            <section id="inputContainer">
                <fieldset>
                    <label for="title">Title</label>
                    <input id="titleInput" type="text">
                </fieldset>
                <fieldset>
                    <label for="synopsis">Synopsis</label>
                    <textarea id="synopsisInput"></textarea>
                </fieldset>
                <fieldset>
                    <label for="date">Date</label>
                    <input id="dateInput" type="date">
                </fieldset>
                <fieldset>
                    <label for="url">URL</label>
                    <input id="urlInput" type="text">
                </fieldset>
            </section>
            <section>
                <button id="submitNewArticle__button">Submit</button>
            </section>
        `
    },
    createNewsObject (userId, url, title, synopsis, date) {
        return {
            userId: userId,
            url: url,
            title: title,
            synopsis: synopsis,
            date: date
        }
    }
}


export default factory