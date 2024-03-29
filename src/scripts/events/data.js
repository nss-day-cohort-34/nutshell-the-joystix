
const eventAPI = {
    getEventData(userId) {
        return fetch(`http://localhost:8088/events?userId=${userId}`)
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
    editEvent(editedEvent) {
        return fetch(`http://localhost:8088/events/${editedEvent.id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(editedEvent)
        })
            .then(response => response.json())

    }

  }

  export default eventAPI