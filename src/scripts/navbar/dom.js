import navBarObjects from "../navbar/factory.js";

const navBarContainer = document.querySelector("#main");

const renderHomeNavBar = () => {
  navBarContainer.innerHTML += navBarObjects.createHomeNavBar();
};

const renderFriendsNavBar = () => {
  navBarContainer.innerHTML += navBarObjects.createFriendsNavBar();
};

export default { renderHomeNavBar, renderFriendsNavBar };
