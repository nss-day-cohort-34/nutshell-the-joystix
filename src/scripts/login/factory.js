const createLoginHTML = () => {
    return `
        <fieldset>
            <label>username:</label>
            <input type="text">
        </fieldset>
        <fieldset>
        <label>password:</label>
        <input type="text">
        </fieldset>
        <button id="userLogin__button">Login</button>
      `;
  };

  export default createLoginHTML;
