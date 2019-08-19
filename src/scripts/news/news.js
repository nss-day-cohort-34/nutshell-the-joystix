import dom from "./dom.js"
import data from "./data.js";
import factory from "./factory.js"

const newsContainer = document.querySelector("#main")

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
            let loggedInUser = parseInt(sessionStorage.getItem("activeUser"))
            const newArticleObject = factory.createNewsObject(loggedInUser, titleInput.value, synopsisInput.value, dateInput.value, urlInput.value)
            data.saveNewArticle(newArticleObject)
                .then(() => {
                    getAndRenderNews(loggedInUser)
                })
        }
    }
})







export default getAndRenderNews