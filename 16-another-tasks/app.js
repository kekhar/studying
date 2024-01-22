'use strict';

const NewToDoList = {
  tasks: new Map(),
  
  addTask: function(name, description, order) {
    const id = this.tasks.size + 1;
    const newTask = { id, name, description, order };
    this.tasks.set(id, newTask);
    this.sortTasksByOrder();
  },
  
  deleteTaskById: function(id) {
    this.tasks.delete(id);
  },
  
  updateTask: function(id, newName, newDescription, newOrder) {
    if (this.tasks.has(id)) {
      const task = this.tasks.get(id);

      if (newName) {
        task.name = newName;
      }

      if (newDescription) {
        task.description = newDescription;
      }

      if (newOrder !== undefined) {
        task.order = newOrder;
        this.sortTasksByOrder();
      }
    }
  },
  
  sortTasksByOrder: function() {
    const sortedTasks = new Map([...this.tasks.entries()].sort((a, b) => a[1].order - b[1].order));
    this.tasks = sortedTasks;
  }
};

NewToDoList.addTask('Тест 1', 'Описание 1', 1);
NewToDoList.addTask('Тест 2', 'Описание 2', 2);
NewToDoList.addTask('Тест 3', 'Описание 3', 3);

console.log('Список задач до удаления:');
console.log([...NewToDoList.tasks.values()]);

NewToDoList.deleteTaskById(2);
console.log('Список задач после удаления:');
console.log([...NewToDoList.tasks.values()]);

NewToDoList.updateTask(1, 'Новый тест', 'Новое описание', 2);
console.log('Список задач после обновления:');
console.log([...NewToDoList.tasks.values()]);