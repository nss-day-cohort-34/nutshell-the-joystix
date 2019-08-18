
const API = {
    getEventData() {
        return fetch("http://localhost:8088/nutshell_sort=date&_order=desc") 
            .then(response => response.json()) 

    },

    saveEvent(entryObject) {
        return fetch("http://localhost:8088/nutshell", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        })
    }