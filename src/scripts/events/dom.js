
import htmlRep from "../events/factory.js"
import eventAPI from "../events/data.js"
import registerEventsSectionListener from "../events/events.js"


const hiddenEventId = document.querySelector("#eventId")
const nameInput = document.querySelector("#eventName__input")
const locationInput = document.querySelector("#eventLocation__input")
const dateInput = document.querySelector("#eventDate__input")
let addEventContainer = document.querySelector("#addEvent__aside")


const eventEntry = {
  renderEvents(parsedEntries) {
    const eventsContainer = document.querySelector("#eventCard__article")
    for (let eventEntry of parsedEntries) { //changed const to let
      let eventEntryHTML = htmlRep.createEventCard(eventEntry) //changed const to let
      eventsContainer.innerHTML += eventEntryHTML
    }
  },

  renderCreateAddEventsButton() {
    let addEventButtonHtml = htmlRep.createAddEventsButton()
    eventsContainer.innerHTML += addEventButtonHtml
  },
  renderNewEventInputs(newHtml) {
    eventsContainer.innerHTML += newHtml
  },
  updateFormFields(editBtnId) {
    fetch(`http://localhost:8088/events/${editBtnId}`)
      .then(response => response.json())
      .then(event => {
        hiddenEventId.value = event.id // Hidden value.
        nameInput.value = event.name
        locationInput.value = event.location
        dateInput.value = event.date
      })

  },
  // Get and display saved events
  getAndRenderEvents(userId) {

    eventAPI.getEventData(userId)
      .then(parsedEntries => { this.renderEvents(parsedEntries) })
      .then(registerEventsSectionListener)
  }
}
export default eventEntry
