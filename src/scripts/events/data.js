
const API = {
    getEventData() {
        return fetch("http://localhost:8088/events?_sort=date&_order=desc") 
            .then(response => response.json()) 

    },

    saveEvent(eventObject) {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        })
    },

    deleteEvent(deleteBtn) {
      return fetch(`http://localhost:8088/events/${deleteBtn}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
    },
    editEvent(event) {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(event)
        })
            .then(response => response.json())
  
    }
   
  }  
  
  export default API