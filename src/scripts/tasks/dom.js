const taskDomMethods = {
  renderTaskSection: taskSectionHTML => {
    document.querySelector("#main").innerHTML += taskSectionHTML;
  },

  renderTaskList: (location, taskListHTMLRep) => {
    location.innerHTML += taskListHTMLRep;
  },

  renderTaskForm: (location, taskHTML) => {
    location.innerHTML += taskHTML;
  }
};

export default taskDomMethods;
