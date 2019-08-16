const API = {
    getNewsData(){
        return fetch("http://localhost:8088/news")
            .then(response => response.json())
    }
}