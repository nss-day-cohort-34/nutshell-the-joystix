import dom from "./dom.js"
import data from "./data.js";
import factory from "./factory.js"

const newsContainer = document.querySelector("#main")
let loggedInUser = parseInt(sessionStorage.getItem("activeUser"))

const getAndRenderNews = (userId) => {
    dom.renderAddArticleButton()
    data.getNewsData(userId)
        .then(articlesArray => {
            dom.renderArticles(articlesArray)
        })
}
// write factory and render functions for news container
//refactor main references to news container
//delete and edit


newsContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("addArticle")) {
        newsContainer.innerHTML = "";
        const newArticleForm = factory.createNewArticleInputs();
        dom.renderNewArticleInputs(newArticleForm);
        getAndRenderNews(parseInt(sessionStorage.getItem("activeUser")))
    }
})

newsContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("submitNewArticle")) {
        const titleInput = document.querySelector("#titleInput")
        const synopsisInput = document.querySelector("#synopsisInput")
        const dateInput = document.querySelector("#dateInput")
        const urlInput = document.querySelector("#urlInput")
        if (titleInput.value === "" || synopsisInput.value === "" || dateInput.value === "" || urlInput.value === "") {
            alert("Please fill in all fields before submitting")
        } else {
            newsContainer.innerHTML = ""
            const newArticleObject = factory.createNewsObject(loggedInUser, titleInput.value, synopsisInput.value, dateInput.value, urlInput.value)
            data.saveNewArticle(newArticleObject)
                .then(() => {
                    getAndRenderNews(loggedInUser)
                })
        }
    }
})

newsContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteArticle--")) {
        const articleToDelete = event.target.id.split("--")[1]
        console.log(articleToDelete)
        data.deleteArticle(articleToDelete)
            .then(data.getEntriesData)
            .then(() => {
                newsContainer.innerHTML = ""
                getAndRenderNews(loggedInUser)
            })
    }
})

newsContainer.addEventListener("click", event => {
    if (event.target.id.startsWith("editArticle--")) {
        const articleToEditId = event.target.id.split("--")[1]
        const buttonForArticleToEdit = document.querySelector(`#editArticle--${articleToEditId}`)
        const articleToEdit = buttonForArticleToEdit.parentNode
        articleToEdit.innerHTML = `
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
        console.log(articleToEdit)
    }
})







export default getAndRenderNews