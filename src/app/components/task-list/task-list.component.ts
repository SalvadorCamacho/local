import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: [
  ]
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(public taskSevice: TaskService) {
     this.tasks = this.taskSevice.getTask();
  }

  ngOnInit(): void {
  }

}
