import API from "./data.js"
import eventEntry from "./dom.js"

// DOM references
const hiddenEventId = document.querySelector("#eventId")
const nameInput = document.querySelector("#eventName__input")
const locationInput = document.querySelector("#eventLocation__input")
const dateInput = document.querySelector("#eventDate__input")
const eventsContainer = document.querySelector("#main");
const addEventBtn = document.querySelector("#addEvent__button")



// Get and display saved events
const getAndRender = () => {
    eventsContainer.innerHTML = ""
    API.getEventData().then((parsedEntries) => { eventEntry.loopThroughData(parsedEntries) })

}
getAndRender()


// clear inputs
const clearInputs = () => {
    nameInput.value = ""
    dateInput.value = ""
    locationInput.value = ""
  }
  
  eventsContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("deleteBtnId")) {
        const deleteBtnId = event.target.id.split("--")[1]
        API.deleteEvent(deleteBtnId)
            .then(getAndRender)
    }
    if (event.target.id.startsWith("editBtnId")) {
        const editBtnId = event.target.id.split("--")[1]
        eventEntry.updateFormFields(editBtnId)
    }
})
  export default {hiddenEventId, nameInput, locationInput,dateInput, eventsContainer, addEventBtn}