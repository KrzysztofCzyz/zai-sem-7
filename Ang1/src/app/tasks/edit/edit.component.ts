import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared/model/task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: `edit.component.html`,
  styles: [
  ]
})
export class EditComponent implements OnInit {

  task:Task;
  @Output() closed:EventEmitter<any>;

  constructor(private taskService:TaskService) { 
    this.closed = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.task = {name:""}
  }

  submit() {
    let newTask : Task = Object.assign({}, this.task);
    this.taskService.addTask(newTask);
    this.closed.emit();
  }

  close() {
    this.closed.emit();
  }
}
