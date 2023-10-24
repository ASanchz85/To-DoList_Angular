import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  checkData(): ToDo[] {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  }

  saveData(allData: ToDo[], data?:ToDo): void {
    if (data) allData.push(data);
    localStorage.setItem('tasks', JSON.stringify(allData));
  }
}
