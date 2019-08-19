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
  
  //   addEventBtn.addEventListener("click", (event) => { 
//           // Check for empty string
//     if (nameInput.value === "" || dateInput.value === "" || locationInput.value === "") {
//         alert("Please,complete all fields")
//     } else {
//         // If the event has an Id already, populate the form with the data to edit
//         if (hiddenEventId.value !== "") {
//             const entry = {
//                 id: hiddenEventId.value,
//                 name: nameInput.value,
//                 date: dateInput.value,
//                 location: locationInput.value,
            
//             }
//             API.editEvent(entry).then(getAndRender).then(clearInputs)
//             // If no Id, create an event
//         } else {

//             // call createEventObject and send it the form data. It will make a new object with the current form data. 
//             const newEvent = htmlRep.createEventObject(nameInput.value, dateInput.value, locationInput.value)
//             //call the API method saveEvent from data.js and pass it the new entry.
//             API.saveEvent(newEvent).then(getAndRender)
//             // Reset all the fields to an empty string. Set date to current date
//             clearInputs()
//         }
//     }
// })
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