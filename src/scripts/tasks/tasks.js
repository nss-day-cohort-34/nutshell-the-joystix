import taskAPImethods from "../tasks/data.js";
import taskFactoryObj from "../tasks/factory.js";
import taskDomObj from "../tasks/dom.js";

const taskContainer = document.querySelector("#main");

const renderTaskHeader = () => {
  const taskHeader = taskFactoryObj.createTaskListHeader();

  taskDomObj.renderTaskHeader(taskHeader);
};

const getTasksPostToDom = () => {
  taskAPImethods
    .getTasks(parseInt(sessionStorage.getItem("activeUser")))
    .then(parsedTasks => {
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

taskContainer.addEventListener("click", event => {
  if (event.target.id.startsWith("submitNewTask")) {
    const newTask = document.querySelector("#newTask__input").value;
    const newTaskDate = document.querySelector("#newTask__date").value;

    const taskObj = {
      userId: parseInt(sessionStorage.getItem("activeUser")),
      newTask: newTask,
      newTaskDate: newTaskDate,
      isComplete: false
    };

    if (taskObj.newTask === "" || taskObj.newTaskDate === "") {
      alert("Please fill out both fields");
    } else {
      taskAPImethods
        .postTaskEntry(taskObj)
    }
  }
});

export default { renderTaskHeader, getTasksPostToDom, renderNewTaskButton };
