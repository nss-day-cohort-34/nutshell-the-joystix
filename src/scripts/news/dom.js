import factory from "./factory.js"

const dom = {
    renderArticles(articlesArray) {
        const newsContainer = document.querySelector("#main")
        newsContainer.innerHTML = ""
        for (articleObject of articlesArray) {
            let articleHTML = factory.createNewsHTML(articleObject)
            newsContainer.innerHTML += articleHTML
        }
    }
}

export default dom