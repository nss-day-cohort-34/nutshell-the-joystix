const data = {
    getNewsData(userId){
        return fetch(`http://localhost:8088/news?userId=${userId}`)
            .then(response => response.json())
            .then(parsed => console.log(parsed))
    }
}

export default data