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
    //submit new article
    if (event.target.id.startsWith("submitNewArticle")) {
        const titleInput = document.querySelector("#titleInput")
        const synopsisInput = document.querySelector("#synopsisInput")
        const urlInput = document.querySelector("#urlInput")
        if (titleInput.value === "" || synopsisInput.value === "" || urlInput.value === "") {
            alert("Please fill in all fields before submitting")
        } else {
            const timestamp = new Date().toLocaleString()
            newsContainer.innerHTML = ""
            const newArticleObject = factory.createNewsObject(loggedInUser, titleInput.value, synopsisInput.value, urlInput.value, timestamp)
            data.saveNewArticle(newArticleObject)
                .then(() => {
                    getAndRenderNews(loggedInUser)
                })
        }
    //update existing article with edits
    } else if (event.target.id.startsWith("submitEditedArticle")) {
        let hiddenArticleId = document.getElementById("articleId")
        const timestamp = new Date().toLocaleString()
        const intTitleInput = document.querySelector("#intTitleInput")
        const intSynopsisInput = document.querySelector("#intSynopsisInput")
        const intUrlInput = document.querySelector("#intUrlInput")
        const editedArticle = factory.createNewsObject(loggedInUser, intUrlInput.value, intTitleInput.value, intSynopsisInput.value, timestamp)
        if (intTitleInput.value === "" || intSynopsisInput.value === "" || intUrlInput.value === "") {
            alert("Please fill in all fields before submitting")
        } else {
            newsContainer.innerHTML = ""
            data.editArticle(editedArticle, hiddenArticleId.value)
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
        const articleToEdit = buttonForArticleToEdit.parentNode.previousElementSibling
        console.log(articleToEdit)
        articleToEdit.innerHTML = `
        <section id="inputContainer">
        <input type="hidden" id="articleId" value="">
            <fieldset>
                <label for="Title">Title</label>
                <input id="intTitleInput" type="text">
            </fieldset>
            <fieldset>
                <label for="synopsis">Synopsis</label>
                <textarea id="intSynopsisInput"></textarea>
            </fieldset>
            <fieldset>
                <label for="url">URL</label>
                <input id="intUrlInput" type="text">
            </fieldset>
        </section>
        <section>
            <button id="submitEditedArticle__button">Submit</button>
        </section>
        `
        //GET article data
        //convert and render as input values (update form fields)
        let hiddenArticleId = document.getElementById("articleId")
        data.updateFormFields(articleToEditId)
            .then(article => {
                hiddenArticleId.value = article.id
                intTitleInput.value = article.title
                intSynopsisInput.value = article.synopsis
                intUrlInput.value = article.url
                console.log(hiddenArticleId.value)
        })
        //POST updated article
        //GET and render all articles
    }
})




export default getAndRenderNews