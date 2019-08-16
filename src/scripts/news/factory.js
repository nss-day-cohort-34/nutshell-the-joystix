
const newNewsObject = (userId, url, title, synopsis, date) => {
    return {
        userId: userId,
        url: url,
        title: title,
        synopsis: synopsis,
        date: date
    }
}

const createNewsHTML = (title, synopsis, url) => {
    return `
    <h2 class="name">${title}</h2>
    <p class="info"> ${synopsis}</p>
    <p class="info">${date}</p>
    `
}

const createNewsInputs = () => {
    return `
    <input type="text" id="newsTitle__input">
    <textarea id="newsSynopsis__input></textarea>
    <input type="date" id="newsDate__input>
    `
}
