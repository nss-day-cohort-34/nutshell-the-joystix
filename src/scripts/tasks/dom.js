import taskListHTMLObj from "../tasks/factory.js";

const taskContainer = document.querySelector("#main");

const renderTaskHeader = taskHeaderHTML => {
  taskContainer.innerHTML += taskHeaderHTML;
};

const renderTaskList = taskListHTMLRep => {
  taskContainer.innerHTML += taskListHTMLRep;
};

const renderNewTaskButton = taskBtn => {
  taskContainer.innerHTML += taskBtn;
};

const renderTaskForm = (taskHTML) => {
  taskContainer.innerHTML += taskHTML;
};

export default {
  renderTaskHeader,
  renderTaskList,
  renderTaskForm,
  renderNewTaskButton
};
