import landingDomObject from "./dom.js";
import renderRegisterForm from "../register/dom.js";
import renderLoginObject from "../login/dom.js";

const mainContainer = landingDomObject.landingContainer;

const registerFormBtn = () => {
  mainContainer.addEventListener("click", () => {
    if (event.target.id.includes("register")) {
      mainContainer.innerHTML = "";
      renderRegisterForm();
    }
  });
};

const loginFormBtn = () => {
  mainContainer.addEventListener("click", () => {
    if (event.target.id.includes("login")) {
      mainContainer.innerHTML = "";
      renderLoginObject.renderLoginToDom();
    }
  });
};

export default { registerFormBtn, loginFormBtn };
