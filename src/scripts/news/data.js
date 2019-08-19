import dom from "./dom.js"


const data = {
    getNewsData(userId){
        return fetch(`http://localhost:8088/news?userId=${userId}`)
            .then(response => response.json())
    }
}

export default data