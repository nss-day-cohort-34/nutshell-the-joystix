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
  const loggedInUser = parseInt(sessionStorage.getItem("activeUser"));

  // fetches API and renders it to DOM
  const getTasksToDom = () => {
    taskAPImethods
      .getTasks(parseInt(sessionStorage.getItem("activeUser")))
      .then(parsedTasks => {
        for (let i = 0; i < parsedTasks.length; i++) {
          const task = parsedTasks[i];
          if (task.isComplete === false) {
            const convertedTasks = taskFactoryObj.createTaskListHTML(task);
            taskDomObj.renderTaskList(taskContainer, convertedTasks);
          }
        }
      });
  };

  getTasksToDom();

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
        taskAPImethods
          .postTaskEntry(taskObj)
          .then((taskContainer.innerHTML = ""))
          .then(getTasksToDom);
      }

      // if checkbox is clicked update isCompleted to TRUE and remove task from DOM
    } else if (event.target.id.startsWith("taskCheckbox")) {
      const id = event.target.id.split("-")[1];

      const completedTaskInput = event.target.nextElementSibling;
      const completedTaskDate =
        event.target.nextElementSibling.nextElementSibling;

      const completedTaskObj = taskFactoryObj.createCompletedObject(
        loggedInUser,
        completedTaskInput.textContent,
        completedTaskDate.textContent
      );

      taskAPImethods
        .completeTaskEntry(completedTaskObj, id)
        .then((taskContainer.innerHTML = ""))
        .then(getTasksToDom);
      // edit the task with PUT method
    } else if (event.target.id.startsWith("editTask")) {
      const id = event.target.id.split("-")[1];

      const editTaskContainer = document.querySelector(
        `#editTask__button-${id}`
      ).parentElement;

      editTaskContainer.innerHTML = `
      <div id="editTask__form">
      <input type="hidden" id="editForm__hiddenInput" value="" />
      <fieldset>
        <label>New Task</label>
        <input type="text" id="editName__input" >
      </fieldset>
      <fieldset>
        <label>Due Date</label>
        <input type="date" id="editDate__date" >
      </fieldset>
      <button id="submitEditTask__button">Submit</button>
    </div>
      `;

      const hiddenTaskForm = document.querySelector("#editForm__hiddenInput");
      const editTaskInput = document.querySelector("#editName__input");
      const editTaskDate = document.querySelector("#editDate__date");
      taskAPImethods.updateTaskField(id).then(task => {
        hiddenTaskForm.value = task.id;
        editTaskInput.value = task.taskName;
        editTaskDate.value = task.taskDate;
      });
    } else if (event.target.id.startsWith("submitEditTask")) {
      const hiddenTaskForm = document.querySelector("#editForm__hiddenInput");
      const editTaskInput = document.querySelector("#editName__input");
      const editTaskDate = document.querySelector("#editDate__date");

      const edittedTask = taskFactoryObj.createEditTaskObject(
        loggedInUser,
        editTaskInput.value,
        editTaskDate.value
      );

      taskAPImethods
        .editTaskEntry(edittedTask, hiddenTaskForm.value)
        .then((taskContainer.innerHTML = ""))
        .then(getTasksToDom);
    }
  });
};

export default renderTaskSection;
