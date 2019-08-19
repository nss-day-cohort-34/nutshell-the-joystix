const createTaskListHeader = () => {
  return `
  <section id="taskListHeader">
  <h3>Task List</h3>
  </section>
  `;
};

const createTaskListHTML = tasks => {
  // renders the html for the task list. need to interpolate the data for multiple tasks? no functionality on checkbox yet
  return `
  <section id="taskItem-${tasks.id}">
    <input type="checkbox" id="task__checkbox" >
    <p>${tasks.taskName}</p>
    <p>${tasks.taskDate}</p>
    <button id="deleteTask-${tasks.id}">Delete Task</button>
  </section>`;
};

const createTaskFormHTML = () => {
  // creates html string for a form to add a new task. will render when user clicks "newTask__button"
  return `
    <section id="newTask__form">
        <fieldset>
            <label>New Task Name</lable>
            <input type="text" id="newTask__input" >
        </fieldset>
        <button id="submitNewTask__button">Submit</button>
    </section>`;
};

const createNewTaskButton = () => {
  return `
  <section>
    <button id="addNewTask__button">Add New Task!</button>
  </section>
  `;
};

export default {
  createTaskListHeader,
  createTaskListHTML,
  createTaskFormHTML,
  createNewTaskButton
};
