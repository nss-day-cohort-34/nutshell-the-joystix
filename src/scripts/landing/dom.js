import createLandingHTML from "./factory.js";

const landingContainer = document.querySelector("#main");

const renderLandingToDom = () => {
  const landingHTML = createLandingHTML();
  landingContainer.innerHTML += landingHTML;
};

export default renderLandingToDom;
