import { Component } from '@angular/core';
import { ToDo } from '../models/to-do';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  list: ToDo[] = [];
  nameTask = '';
  currentTask?: ToDo;
  currentIndex = 0;

  constructor(private storage: StorageService) {
    this.list = storage.checkData();
  }

  addTask(): void {
    if (this.nameTask.trim() !== '') {
      let currentState = this.currentTask ? this.currentTask['_status'] : false;
      const task: ToDo = new ToDo(this.nameTask, currentState);

      if (!this.currentTask) this.storage.saveData(this.list, task);
      else {
        this.list[this.currentIndex] = task;
        this.storage.saveData(this.list);
      }

      this.list = this.storage.checkData();
      this.restartValueS();
    }
  }

  deleteTask(index: number): void {
    confirm('Are you sure you want to delete it?');
    this.list.splice(index, 1);
    this.storage.saveData(this.list);
  }

  doneTask(index: number): void {
    this.list[index]['_status'] = !this.list[index]['_status'];
    this.storage.saveData(this.list);
  }

  updateTask(index: number): void {
    this.nameTask = this.list[index]['_name'];
    this.currentIndex = index;
    this.currentTask = new ToDo(this.nameTask, this.list[index]['_status']);
  }

  restartValueS(): void {
    this.currentIndex = 0;
    this.nameTask = '';
    this.currentTask = undefined;
  }
}
