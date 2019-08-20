const taskFactoryObject = {
  createTaskSection: () => {
    return `
    <section id="taskList__section">
      <h3>Task List</h3>
      <div id="newTask__div">
        <button id="addNewTask__button">Add New Task!</button>
      </div>
      <div id="taskList__div"></div>
    </section>
    `;
  },

  createTaskListHTML: tasks => {
    return `
    <div id="taskItem-${tasks.id}">
      <input type="hidden" id="editForm__hiddenInput-${tasks.id}" value="" />
      <input type="checkbox" id="taskCheckbox__checkbox-${tasks.id}" >
      <p id="task__text">${tasks.taskName}</p>
      <p id="taskDate__date">Due Date: ${tasks.taskDate}</p>
      <button id="editTask__button-${tasks.id}">Edit Task</button>
    </div>`;
  },

  createTaskFormHTML: () => {
    return `
    <div id="newTask__form">
        <fieldset>
          <label>New Task</label>
          <input type="text" id="newTask__input" >
        </fieldset>
        <fieldset>
          <label>Due Date</label>
          <input type="date" id="newTask__date" >
        </fieldset>
        <button id="submitNewTask__button">Submit</button>
    </div>`;
  },

  createEditForm: () => {
    return `
    <div id="editTask__form">
      <fieldset>
        <label>New Task</label>
        <input type="text" id="newTask__input" >
      </fieldset>
      <fieldset>
        <label>Due Date</label>
        <input type="date" id="newTask__date" >
      </fieldset>
      <button id="submitNewTask__button">Submit</button>
    </div>
    `;
  }
};

export default taskFactoryObject;
