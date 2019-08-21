import newsFactory from "./factory.js"



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


const newsDom = {
    renderArticles (articlesArray) {
        const newsContainer = document.querySelector("#newsList")
        sortArticles(articlesArray)
        for (let articleObject of articlesArray) {
            let articleHTML = newsFactory.createNewsHTML(articleObject)
            newsContainer.innerHTML += articleHTML
        }
    },
    renderNewArticleInputs (newHTML) {
        const newsContainer = document.querySelector("#newsList")
        newsContainer.innerHTML += newHTML
    },
    renderNewsContainer () {
        const mainContainer = document.querySelector("#main")
        let newsContainerHTML = newsFactory.createNewsContainer()
        mainContainer.innerHTML += newsContainerHTML
    }

}

export default newsDom