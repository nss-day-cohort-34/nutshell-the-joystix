import factory from "./factory.js"

const mainContainer = document.querySelector("#main")
const newsContainer = document.querySelector("#newsList")


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
        const newsContainer = document.querySelector("#newsList")
        sortArticles(articlesArray)
        for (let articleObject of articlesArray) {
            let articleHTML = factory.createNewsHTML(articleObject)
            newsContainer.innerHTML += articleHTML
        }
    },
    renderNewArticleInputs (newHTML) {
        const newsContainer = document.querySelector("#newsList")
        newsContainer.innerHTML += newHTML
    },
    renderNewsContainer () {
        const newsContainer = document.querySelector("#newsList")
        let newsContainerHTML = factory.createNewsContainer()
        mainContainer.innerHTML += newsContainerHTML
    }

}

export default dom