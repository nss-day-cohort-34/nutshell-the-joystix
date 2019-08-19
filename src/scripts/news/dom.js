import factory from "./factory.js"

const newsContainer = document.querySelector("#main")

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
        sortArticles(articlesArray)
        for (let articleObject of articlesArray) {
            let articleHTML = factory.createNewsHTML(articleObject)
            newsContainer.innerHTML += articleHTML
        }
    },
    renderAddArticleButton () {
        let addArticleButtonHTML = factory.createAddArticleButton()
        newsContainer.innerHTML += addArticleButtonHTML
    },
    renderNewArticleInputs (newHTML) {
        newsContainer.innerHTML += newHTML
    }

}

export default dom