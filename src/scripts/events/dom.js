
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
    const sortedEntries = parsedEntries.sort((a,b)=>{
      if(a.date > b.date) {
        return 0
      } else if(a.date < b.date){
        return -1
      }
      return 1
    })
    eventsContainer.innerHTML = ""
    for (let eventEntry of sortedEntries) { //changed const to let
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

        nameInput.value = event.name
        locationInput.value = event.location
        dateInput.value = event.date
      })

  },
  // Get and display saved events
  getAndRenderEvents(userId) {

    eventAPI.getEventData(userId)
      .then(eventEntry.renderEvents)
  }
}
export default eventEntry
