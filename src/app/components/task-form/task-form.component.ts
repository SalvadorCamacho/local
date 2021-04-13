import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styles: [
  ]
})
export class TaskFormComponent implements OnInit {

  constructor( public taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(t:HTMLInputElement,d:HTMLTextAreaElement){
     // console.log(t.value, ' - ', d.value);
     this.taskService.addTask(
       {
         title: t.value,
         description: d.value,
         hide: true
       }
     );

     t.value = '';
     d.value = '';
     t.focus();

    //  console.log(this.taskService.getTask());
      return false;
  }


}
