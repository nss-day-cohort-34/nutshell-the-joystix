const newEventObject = (name, date, location) => {
    return {
        name: name,
        date: date,
        location: location,
     }
 }
 const createEventHTML = (name, location, date) => {
    return `
    <h2 class="name">${name}</h2>
    <p class="info"> ${location}</p>
    <p class="info">${date}</p>
    `
 }
 const createEventInputs = () => {
    return `
    <input type="text" id="eventName__input">
    <textarea id="eventLocation__input></textarea>
    <input type="date" id="eventDate__input>
    `
 }