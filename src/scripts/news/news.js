import newsDom from "./dom.js"
import newsData from "./data.js";
import newsFactory from "./factory.js"

let loggedInUser = parseInt(sessionStorage.getItem("activeUser"))
const newsContainer = document.querySelector("#newsList")


const registerNewsListeners = () => {
    const mainContainer = document.querySelector("#main")
    mainContainer.addEventListener("click", event => {
        if (event.target.id.startsWith("addArticle")) {
            const newsContainer = document.querySelector("#newsList")
            newsContainer.innerHTML = "";
            const newArticleForm = newsFactory.createNewArticleInputs();
            newsDom.renderNewArticleInputs(newArticleForm);
            newsData.getNewsData(loggedInUser)
                .then(articles => {
                    newsDom.renderArticles(articles)
                })
        }
    })

    mainContainer.addEventListener("click", event => {
        //submit new article
        if (event.target.id.startsWith("submitNewArticle")) {
            const titleInput = document.querySelector("#titleInput")
            const synopsisInput = document.querySelector("#synopsisInput")
            const urlInput = document.querySelector("#urlInput")
            if (titleInput.value === "" || synopsisInput.value === "" || urlInput.value === "") {
                alert("Please fill in all fields before submitting")
            } else {
                const timestamp = new Date().toLocaleString()
                const newsContainer = document.querySelector("#newsList")
                newsContainer.innerHTML = ""
                const newArticleObject = newsFactory.createNewsObject(loggedInUser, titleInput.value, synopsisInput.value, urlInput.value, timestamp)
                newsData.saveNewArticle(newArticleObject)
                    .then(() => newsData.getNewsData(loggedInUser))
                    .then(articles => {
                        newsDom.renderArticles(articles)
                    })
            }
            //update existing article with edits
        } else if (event.target.id.startsWith("submitEditedArticle")) {
            let hiddenArticleId = document.getElementById("articleId")
            const timestamp = new Date().toLocaleString()
            const intTitleInput = document.querySelector("#intTitleInput")
            const intSynopsisInput = document.querySelector("#intSynopsisInput")
            const intUrlInput = document.querySelector("#intUrlInput")
            const editedArticle = newsFactory.createNewsObject(loggedInUser, intUrlInput.value, intTitleInput.value, intSynopsisInput.value, timestamp)
            if (intTitleInput.value === "" || intSynopsisInput.value === "" || intUrlInput.value === "") {
                alert("Please fill in all fields before submitting")
            } else {
                const newsContainer = document.querySelector("#newsList")
                newsContainer.innerHTML = ""
                newsData.editArticle(editedArticle, hiddenArticleId.value)
                    .then(() => newsData.getNewsData(loggedInUser))
                    .then(articles => {
                        newsDom.renderArticles(articles)
                    })
            }
        }
    })

    mainContainer.addEventListener("click", event => {
        if (event.target.id.startsWith("deleteArticle--")) {
            const articleToDelete = event.target.id.split("--")[1]
            console.log(articleToDelete)
            newsData.deleteArticle(articleToDelete)
                .then(() => newsData.getNewsData(loggedInUser))
                .then(() => {
                    const newsContainer = document.querySelector("#newsList")
                    newsContainer.innerHTML = ""
                    newsData.getNewsData(loggedInUser)
                        .then(articles => {
                            newsDom.renderArticles(articles)
                        })
                })
        }
    })

    mainContainer.addEventListener("click", event => {
        if (event.target.id.startsWith("editArticle--")) {
            const articleToEditId = event.target.id.split("--")[1]
            const buttonForArticleToEdit = document.querySelector(`#editArticle--${articleToEditId}`)
            const articleToEdit = buttonForArticleToEdit.parentNode.previousElementSibling
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
            newsData.updateFormFields(articleToEditId)
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

}


export default {
    registerNewsListeners
}