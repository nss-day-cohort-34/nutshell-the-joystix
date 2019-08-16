export default () => {
  return `
    <fieldset>
        <label for="firstName">First Name: </label>
        <input type="text" name="firstName" id="firstName">
        <label for="lastName">Last Name: </label>
        <input type="text" name="lastName" id="lastName">
    </fieldset>
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
        <input type="password" name="password" id="password">
    </fieldset>
    <fieldset class="register__fieldset">
        <input type="submit" value="Register" id="addUser__button">
    </fieldset>
    `;
};
