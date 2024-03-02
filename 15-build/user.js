import Task from './task.js';

export default class User {
  constructor() {
    this.task = new Task('Задача запущена');
  }

  do() {
    this.task.run();
  }
}