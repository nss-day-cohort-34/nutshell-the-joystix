// import
import landingDomObject from "./landing/dom.js";
import landingEventObject from "./landing/landing.js";
import registerAddUser from "./register/register.js"
import userLogin from "./login/login.js"
import navBarDomObject from "./navbar/dom.js";

// end import

// navBar
navBarDomObject.renderHomeNavBar();
navBarDomObject.renderFriendsNavBar();
//navBar

// begin landing page
landingDomObject.renderLandingToDom();
landingEventObject.registerFormBtn();
landingEventObject.loginFormBtn();
// end landing page

// begin login page

//end login page

// register click listener for when a user clicks on addUser button
registerAddUser()

//login user
userLogin()
