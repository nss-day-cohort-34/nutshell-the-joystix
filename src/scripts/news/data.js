import dom from "./dom.js"


const data = {
    getNewsData(userId){
        return fetch(`http://localhost:8088/news?userId=${userId}`)
            .then(response => response.json())
    },
    saveNewArticle(newArticle) {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newArticle)
        })
        .then(response => response.json())
        .then(parsed => {console.log(parsed)})
    },
    deleteArticle(articleId) {
        return fetch(`http://localhost:8088/news/${articleId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    updateFormFields(articleId) {
        const intTitleInput = document.querySelector("#intTitleInput")
        const intSynopsisInput = document.querySelector("#intSynopsisInput")
        const intUrlInput = document.querySelector("#intUrlInput")
        return fetch(`http://localhost:8088/news/${articleId}`)
        .then(response => response.json())
    },
    editArticle(updatedObject, articleId) {
        return fetch(`http://localhost:8088/news/${articleId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
        .then(response => response.json())
    }
}

export default data