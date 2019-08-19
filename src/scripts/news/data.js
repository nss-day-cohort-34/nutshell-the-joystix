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
}

export default data