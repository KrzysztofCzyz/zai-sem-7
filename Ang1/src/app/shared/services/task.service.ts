import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  addTask(task: Task) {
    this.tasksCollection.push(task);
    this.tasks$.next(this.tasksCollection);
  }

  private tasksCollection : Task[] = [
    { name : "b"},
    { name : "y"}
  ]

  tasks$ : BehaviorSubject<Task[]>;

  constructor() { 
    this.tasks$ = new BehaviorSubject<Task[]>(this.tasksCollection);
  }

  getTasks() {
    this.tasks$.next(this.tasksCollection);
  }
}
