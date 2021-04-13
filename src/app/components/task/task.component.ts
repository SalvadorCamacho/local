import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [
  ]
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor(public taskService: TaskService) {
    this.task = {
      title: '',
      description: '',
      hide: true
    }
  }

  ngOnInit(): void {
  }

  deleteTask(task: Task){
    if(confirm('Are you sure you wnat to delete ir?')){
      this.taskService.deleteTask(task);
    }


  }

}
