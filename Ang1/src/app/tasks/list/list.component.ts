import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/model/task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: `list.component.html`,
  styles: [
  ]
})
export class ListComponent implements OnInit {

  selectedTask: Task;
  tasks$:Observable<Task[]>;

  @Output() taskSelected : EventEmitter<Task>;

  constructor(private taskService:TaskService) { 
    this.taskSelected = new EventEmitter<Task>();
    this.tasks$ = taskService.tasks$;
  }

  ngOnInit(): void {
  }

  selectTask(task:Task) {
    this.selectedTask = task;
    this.taskSelected.emit(task);
  } 

}
