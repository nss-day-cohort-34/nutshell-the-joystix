const newsData = {
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
    },
    deleteArticle(articleId) {
        return fetch(`http://localhost:8088/news/${articleId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    updateFormFields(articleId) {
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

export default newsData