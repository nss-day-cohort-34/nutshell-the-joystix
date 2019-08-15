import createLoginHTML from "./factory.js";

const loginContainer = document.querySelector("#main");

const renderLoginToDom = () => {
  const loginHTML = createLoginHTML();
  loginContainer.innerHTML += loginHTML;
};

export default {renderLoginToDom, loginContainer};
