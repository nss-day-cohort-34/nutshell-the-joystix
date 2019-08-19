const htmlRep = {
   createAddEventsButton() {
      return `
   <button id="addEvent__button">Add a New Event</button>
   `
   },

   createEventInputs() {
      return `
   <section class="event__inputs">
      <legend>Add New Event</legend>
      <fieldset>
         <label for="eventName__input">Name:</label>
         <input type="text" id="eventName__input">
         <label for="eventDate__input">Date:</label>
         <input type="date" id="eventDate__input">
         <label for="eventLocation__input">Location:</label>
         <input type="text" id="eventLocation__input"></textarea>
      </fieldset>
      <button id="addEvent__button">Add Event</button>
   </section>
   `
   },

   newEventObject(name, date, location) {
      return {
         name: name,
         date: date,
         location: location,
      }
   },

   createEventHTML(event) {
      return `
    <section class="event__output ${event.id}">
      <h2 class="name">${event.name}</h2>
      <p class="info">${event.date}</p>
      <p class="info"> ${event.location}</p>
      <button class = "editBtn" id="editBtnId--${event.id}">
      Edit
      </button>
      <button class = "deleteBtn" id="deleteBtnId--${event.id}">
      Delete
      </button>
    </section>
    `
   }
}
export default htmlRep