'use strict';

const NewToDoList = {
  tasks: [],
  
  addTask: function(name, description, order) {
    const id = this.tasks.length + 1;
    const newTask = { id, name, description, order };
    this.tasks.push(newTask);
    this.sortTasksByOrder();
  },
  
  deleteTaskById: function(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },
  
  updateTask: function(id, newName, newDescription, newOrder) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    
    if (taskIndex !== -1) {
      if (newName) {
        this.tasks[taskIndex].name = newName;
      }
      
      if (newDescription) {
        this.tasks[taskIndex].description = newDescription;
      }

      if (newOrder !== undefined) {
        this.tasks[taskIndex].order = newOrder;
        this.sortTasksByOrder();
      }
    }
  },
  
  sortTasksByOrder: function() {
    this.tasks.sort((a, b) => a.order - b.order);
  }
};

// Пример использования:
NewToDoList.addTask('Тест 1', 'Описание 1', 1);
NewToDoList.addTask('Тест 2', 'Описание 2', 2);
NewToDoList.addTask('Тест 3', 'Описание 3', 3);

console.log('Список задач до удаления:');
console.log(NewToDoList.tasks);

NewToDoList.deleteTaskById(2);
console.log('Список задач после удаления:');
console.log(NewToDoList.tasks);

NewToDoList.updateTask(1, 'Новый тест', 'Новое описание', 2);
console.log('Список задач после обновления:');
console.log(NewToDoList.tasks);
