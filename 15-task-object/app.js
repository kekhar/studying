 'use strict';

const ToDoList = {
  tasks: [],
  
  addTask: function(title, priority) {
    const id = this.tasks.length + 1;
    const newTask = { id, title, priority };
    this.tasks.push(newTask);
    this.sortTasksByPriority();
  },
  
  deleteTaskById: function(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },
  
  updateTask: function(id, newTitle, newPriority) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
      if (newTitle) {
        this.tasks[taskIndex].title = newTitle;
      }
      
      if (newPriority) {
        this.tasks[taskIndex].priority = newPriority;
        this.sortTasksByPriority();
      }
    }
  },
  
  sortTasksByPriority: function() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};

// Пример использования:
ToDoList.addTask('Помыть посуду', 1);
ToDoList.addTask('Погулять с собакой', 2);
ToDoList.addTask('Подготовить ужин', 3);

console.log('Список задач до удаления:');
console.log(ToDoList.tasks);

ToDoList.deleteTaskById(2);
console.log('Список задач после удаления:');
console.log(ToDoList.tasks);

ToDoList.updateTask(1, 'Помыть посуду и полы', 2);
console.log('Список задач после обновления:');
console.log(ToDoList.tasks);
