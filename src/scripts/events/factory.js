const htmlRep = {
   createEventInputs() {
      return `
      <legend>Add New Event</legend>
      <fieldset>
         <label for="eventName__input">Name:</label>
         <input type="text" id="eventName__input">
         <label for="eventDate__input">Date:</label>
         <input type="date" id="eventDate__input">
         <label for="eventLocation__input">Location:</label>
         <input type="text" id="eventLocation__input"></textarea>
      </fieldset>
      <button id="submit">Submit</button>
   `
   },

   createEditInputs(id) {
      return `
      <legend>Add New Event</legend>
      <fieldset>
         <label for="editName__input">Name:</label>
         <input type="text" id="editName__input">
         <label for="editDate__input">Date:</label>
         <input type="date" id="editDate__input">
         <label for="editLocation__input">Location:</label>
         <input type="text" id="editLocation__input"></textarea>
      </fieldset>
      <button id="save--${id}">Save</button>
   `
   },

   createEventObject(userId, name, date, location, id) {
      return {
         userId: userId,
         name: name,
         date: date,
         location: location,
         id: id
      }
   },

   createEventsContainer() {
      return `
      <section class="eventList__section" id="eventList__section">
         <aside id="addEvent__aside">
            <button id="addNewEvent__button">Add a New Event</button>
         </aside>
         <article id="eventCard__article">
          </article>
    </section>`
   },

   createEventCard(event) {
      return `
   <div id="eventCard__div--${event.id}">
        <h2 class="name">${event.name}</h2>
        <p class="info">${event.date}</p>
        <p class="info"> ${event.location}</p>
        <button class = "editBtn" id="editBtnId--${event.id}">
        Edit
        </button>
        <button class = "deleteBtn" id="deleteBtnId--${event.id}">
        Delete
        </button>
    </div>
`
   }
}
export default htmlRep