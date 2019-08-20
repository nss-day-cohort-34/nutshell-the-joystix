import taskAPImethods from "../tasks/data.js";
import taskFactoryObj from "../tasks/factory.js";
import taskDomObj from "../tasks/dom.js";

const renderTaskSection = () => {
  // creates task section as HTML and store in variable
  const taskSectionHTML = taskFactoryObj.createTaskSection();
  // pass taskHTMLstring into function that renders it to the dom
  taskDomObj.renderTaskSection(taskSectionHTML);

  // stores new variables that were generated dynamically
  const taskContainer = document.querySelector("#taskList__div");
  const newTaskDiv = document.querySelector("#newTask__div");

  // fetches API and renders it to DOM
  taskAPImethods
    .getTasks(parseInt(sessionStorage.getItem("activeUser")))
    .then(parsedTasks => {
      for (let i = 0; i < parsedTasks.length; i++) {
        const tasks = parsedTasks[i];
        const convertedTasks = taskFactoryObj.createTaskListHTML(tasks);
        taskDomObj.renderTaskList(taskContainer, convertedTasks);
      }
    });

  // event listener that handles all API methods
  document.querySelector("#main").addEventListener("click", event => {
    // add new task button renders new task form
    if (event.target.id.startsWith("addNewTask")) {
      newTaskDiv.innerHTML = "";
      const taskForm = taskFactoryObj.createTaskFormHTML();
      taskDomObj.renderTaskForm(newTaskDiv, taskForm);
      // POSTS new task to API
    } else if (event.target.id.startsWith("submitNewTask")) {
      const newTask = document.querySelector("#newTask__input");
      const newTaskDate = document.querySelector("#newTask__date");

      const taskObj = {
        userId: parseInt(sessionStorage.getItem("activeUser")),
        taskName: newTask.value,
        taskDate: newTaskDate.value,
        isComplete: false
      };

      if (taskObj.newTask === "" || taskObj.newTaskDate === "") {
        alert("Please fill out both fields");
      } else {
        taskAPImethods.postTaskEntry(taskObj);
      }
      // if checkbox is clicked DELETE this task
    } else if (event.target.id.startsWith("taskCheckbox")) {
      console.log("checkbox");
      const id = event.target.id.split("-")[1];
      taskAPImethods.deleteTaskEntry(id);
      // edit the task with PUT method
    } else if (event.target.id.startsWith("editTask")) {
      const id = event.target.id.split("-")[1];
      console.log(id);
    }
  });
};

export default renderTaskSection;
