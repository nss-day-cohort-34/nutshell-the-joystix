const data = {
  getTasks: (userId) => {
    return fetch(`http://localhost:8088/tasks?userId=${userId}`).then(tasks => tasks.json());
  },

  postTaskEntry: taskEntryObj => {
    return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskEntryObj)
    }).then(tasks => tasks.json());
  },

  deleteTaskEntry: id => {
    return fetch(`http://localhost:8088/tasks/${id}`, {
      method: "DELETE"
    }).then(tasks => tasks.json());
  }
};

export default data;
