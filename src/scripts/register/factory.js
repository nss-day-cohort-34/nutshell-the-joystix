export default () => {
  return `
    <fieldset class="register__fieldset">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
    </fieldset>
    <fieldset class="register__fieldset">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username">
    </fieldset>
    <fieldset class="register__fieldset">
        <label for="password">Password:</label>
        <input type="password" name="password" id="passowrd">
    </fieldset>
    <fieldset class="register__fieldset">
        <input type="submit" value="Register">
    </fieldset>
    `;
};
