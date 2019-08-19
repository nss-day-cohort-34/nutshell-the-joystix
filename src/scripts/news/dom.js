import factory from "./factory.js"

const sortArticles = (articles) => {
    articles.sort(function(a, b) {
        if (a.date < b.date) {
            return 1
        }
        if (a.date > b.date) {
            return -1
        }
        return 0;
    })
}


const dom = {
    renderArticles (articlesArray) {
        const newsContainer = document.querySelector("#main")
        newsContainer.innerHTML = ""
        sortArticles(articlesArray)
        for (let articleObject of articlesArray) {
            let articleHTML = factory.createNewsHTML(articleObject)
            newsContainer.innerHTML += articleHTML
        }
    }
}

export default dom