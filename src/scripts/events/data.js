
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
    },

  deleteEvent(deleteBtnId) {
    return fetch(`http://localhost:8088/nutshell/${deleteBtnId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  editEvent(event) {
      return fetch(`http://localhost:8088/nutshell/${event.id}`, {
          "method": "PUT",
          "headers": {
              "Content-Type": "application/json"
          },
          "body": JSON.stringify(entry)
      })
          .then(response => response.json())

  }
 
}  

export default API