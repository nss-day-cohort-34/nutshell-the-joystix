const createLoginHTML = () => {
    return `
        <fieldset>
            <label>username:</label>
            <input type="text" id="login__username__input">
        </fieldset>
        <fieldset>
            <label>password:</label>
            <input type="text" id="login__password__input">
        </fieldset>
        <button id="userLogin__button">Login</button>
      `;
  };

  export default createLoginHTML;
