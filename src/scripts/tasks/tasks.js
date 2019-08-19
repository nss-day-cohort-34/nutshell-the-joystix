import taskAPImethods from "../tasks/data.js";
import taskFactoryObj from "../tasks/factory.js";
import taskDomObj from "../tasks/dom.js";

const taskContainer = document.querySelector("#main");

const renderTaskHeader = () => {
  const taskHeader = taskFactoryObj.createTaskListHeader();

  taskDomObj.renderTaskHeader(taskHeader);
};

const getTasksPostToDom = () => {
  taskAPImethods.getTasks().then(parsedTasks => {
    for (let i = 0; i < parsedTasks.length; i++) {
      const tasks = parsedTasks[i];
      const convertedTasks = taskFactoryObj.createTaskListHTML(tasks);
      taskDomObj.renderTaskList(convertedTasks);
    }
  });
};

const renderNewTaskButton = () => {
  const newTaskButton = taskFactoryObj.createNewTaskButton();
  taskDomObj.renderNewTaskButton(newTaskButton);
};

taskContainer.addEventListener("click", event => {
  if (event.target.id.startsWith("addNewTask")) {
    const taskForm = taskFactoryObj.createTaskFormHTML();
    taskDomObj.renderTaskForm(taskForm);
  }
});

export default { renderTaskHeader, getTasksPostToDom, renderNewTaskButton };
