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