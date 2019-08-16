const createLoginHTML = () => {
    return `
        <fieldset>
            <label>username:</label>
            <input type="text" id="log__username">
        </fieldset>
        <fieldset>
            <label>password:</label>
            <input type="password" id="log__password">
        </fieldset>
        <button id="userLog__button">Login</button>
      `
  };

  export default createLoginHTML;
