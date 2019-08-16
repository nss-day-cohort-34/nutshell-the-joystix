const createHomeNavBar = () => {
  return `
    <nav>
        <button id="friends__button">Friends</button>
        <button class="logout__button">Logout</button>
    </nav>
    
    `;
};

const createFriendsNavBar = () => {
  return `
    <nav>
        <button id="home__button">Home</button>
        <button class="logout__button">Logout</button>
    </nav>
    `;
};

export default { createHomeNavBar, createFriendsNavBar };
