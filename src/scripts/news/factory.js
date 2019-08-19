
// const newNewsObject = (userId, url, title, synopsis, date) => {
//     return {
//         userId: userId,
//         url: url,
//         title: title,
//         synopsis: synopsis,
//         date: date
//     }
// }
const factory = {
    createNewsHTML (articleObj) {
        return `
        <section class="newsItem" id="newsItem--${articleObj.id}>
            <h2 class="name">${articleObj.title}</h2>
            <p class="info"> ${articleObj.synopsis}</p>
            <p class="info">${articleObj.date}</p>
            <p class="info">${articleObj.url}</p></p>
        </section>
        `
    },
    createAddArticleButton () {},

}
// const createNewsInputs = () => {
//     return `
//     <input type="text" id="newsTitle__input">
//     <textarea id="newsSynopsis__input></textarea>
//     <input type="date" id="newsDate__input>
//     `
// }

export default factory