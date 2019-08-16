const createHomeNavBar = () => {
  return `
    <nav>
        <a href="#friends">Friends</a>
        <a href="#logout">Logout</a>
    </nav>
    
    `;
};

const createFriendsNavBar = () => {
  return `
    <nav>
        <a href="#home">Home</a>
        <a href="#logout">Logout</a>
    </nav>
    `;
};

export default { createHomeNavBar, createFriendsNavBar };
