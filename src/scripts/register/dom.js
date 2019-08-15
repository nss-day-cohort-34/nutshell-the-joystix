import registerHtml from "./factory.js";

export default () => {
  const mainTag = document.querySelector("#main");
  mainTag.innerHTML = registerHtml();
};
