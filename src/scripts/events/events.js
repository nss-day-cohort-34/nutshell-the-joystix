import eventAPI from "../events/data.js"
import eventEntry from "../events/dom.js"
import htmlRep from "../events/factory.js"

// DOM references
const hiddenEventId = document.querySelector("#eventId")
const nameInput = document.querySelector("#eventName__input")
const locationInput = document.querySelector("#eventLocation__input")
const dateInput = document.querySelector("#eventDate__input")

const addNewEvent__button = document.querySelector("#addNewEvent__button")
const submit = document.querySelector("#submit")


const registerEventsSectionListener = () => {
  const eventSection = document.querySelector("#eventList__section")
  const addEventContainer = document.querySelector("#addEvent__aside")
  eventSection.addEventListener("click", () => {
    if (event.target.id.startsWith("addNewEvent__button")) {
      addEventContainer.innerHTML = ""
      const newEventForm = htmlRep.createEventInputs()
      addEventContainer.innerHTML = newEventForm
    } else if

      (event.target.id.startsWith("deleteBtnId")) {
      const deleteBtnId = event.target.id.split("--")[1]
      eventAPI.deleteEvent(deleteBtnId)
        .then(getAndRenderEvents)
    } else if

      (event.target.id.startsWith("submit")) {
      const nameInput = document.querySelector("#eventName__input")
      const locationInput = document.querySelector("#eventLocation__input")
      const dateInput = document.querySelector("#eventDate__input")
      // Check for empty string
      if (nameInput.value === "" || dateInput.value === "" || locationInput.value === "") {
        alert("Please,complete all fields")
      } else {
        addEventContainer.innerHTML = "<button id=\"addNewEvent__button\">Add a New Event</button>"
        let logedInUser = parseInt(sessionStorage.getItem("activeUser"))
        // call createEventObject and send it the form data. It will make a new object with the current form data.
        const newEvent = htmlRep.createEventObject(logedInUser, nameInput.value, dateInput.value, locationInput.value)
        //call the API method saveEvent from data.js and pass it the new entry.
        eventAPI.saveEvent(newEvent).then(() => {
          const eventsContainer = document.querySelector("#eventCard__article")
          eventsContainer.innerHTML = ""
          eventEntry.getAndRenderEvents(logedInUser)
        })
        // Reset all the fields to an empty string. Set date to current date

      }
    }
  })
}

//  if (event.target.id.startsWith("editBtnId")) {
//   const editBtnId = event.target.id.split("--")[1]
//   eventEntry.updateFormFields(editBtnId)
//  }
export default registerEventsSectionListener