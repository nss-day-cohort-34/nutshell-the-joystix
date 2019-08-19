import domReferences from "./main.js"
import htmlRep from "./factory.js"

const eventEntry= {
  loopThroughData(parsedEntries) {
          for (const eventEntry of parsedEntries) {
          const eventEntryHTML = htmlRep.createEventHTML(eventEntry)
          domReferences.eventsContainer.innerHTML += eventEntryHTML
      }
  },
  updateFormFields(editBtnId) {
      fetch(`http://localhost:8088/events/${editBtnId}`)
      .then(response => response.json())
      .then(event => {
          /*
              Now that you KNOW you have the data, render
              an editing form that represents the current
              state of the resource.
          */
         domReferences.hiddenEventId.value = event.id // Hidden value.
         domReferences.nameInput.value = event.name 
         domReferences.locationInput.value = event.location
         domReferences.dateInput.value = event.date
           })

  }
}
export default eventEntry
