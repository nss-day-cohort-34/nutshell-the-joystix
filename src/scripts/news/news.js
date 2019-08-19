import dom from "./dom.js"
import data from "./data.js";

const getAndRenderNews = (userId) => {
    data.getNewsData(userId)
    .then(articlesArray => {
        dom.renderArticles(articlesArray)
    })
}

export default getAndRenderNews


