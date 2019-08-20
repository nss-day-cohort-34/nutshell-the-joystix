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
        .then(eventEntry.getAndRenderEvents(parseInt(sessionStorage.getItem("activeUser"))))

    } else if (event.target.id.startsWith("editBtnId")) {

      const editBtnId = event.target.id.split("--")[1]
      console.log("editBtnId: ", editBtnId);
      // Render form with a save button to the top of page
      const newEventForm = htmlRep.createEditInputs(event.target.previousElementSibling.previousElementSibling.textContent)
      addEventContainer.innerHTML = newEventForm
      // select form inputs and populate them with the event to edit's information
      const nameInput = document.querySelector("#eventName__input")
      const locationInput = document.querySelector("#eventLocation__input")
      const dateInput = document.querySelector("#eventDate__input")
      locationInput.value = event.target.previousElementSibling.textContent
      nameInput.value = event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent

    } else if(event.target.id.startsWith("save")) {
      const editedEvent = htmlRep.createEventObject(logedInUser, nameInput.value, dateInput.value, locationInput.value)
      eventAPI.editEvent(editedEvent)
      eventEntry.getAndRenderEvents(logedInUser)
    } else if  (event.target.id.startsWith("submit")) {

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
          eventEntry.getAndRenderEvents(logedInUser)
        })


      }
    }
  })
}

export default registerEventsSectionListener