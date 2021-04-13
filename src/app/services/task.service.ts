import { Injectable } from '@angular/core';
import { Task } from '../models/Task';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
      this.tasks = [
     /*   {title: 'Play', description: 'les\'t play', hide: true},
        {title: 'study', description: 'I\'m going to study', hide: true}
      */ ];
  }

  getTask(){ //Actualizamos para que si es null no tiene nada, sino...
    if(localStorage.getItem('tareas')===null){
      return this.tasks;
    }else{ //Rescata las tareas
      this.tasks = JSON.parse(localStorage.getItem('tareas')!);
      return this.tasks;
    }
  }

  addTask(task: Task){
    this.tasks.push(task);  //Primero agrega en pantalla
    let tasks: Task[] =[];  //Temporal (arreglo)
    if(localStorage.getItem('tareas') === null){  //Si no hay nada
      tasks.push(task); //Guardar en arreglo (pantalla)
      //Guardar en el localstorage (memora del navegador)
      localStorage.setItem('tareas', JSON.stringify(tasks));
    } else{ //Rescatar elementos de localstorage
      tasks = JSON.parse(localStorage.getItem('tareas')!);
      tasks.push(task); //Memora RAM
      localStorage.setItem('tareas', JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task){
    for(let i=0; i<this.tasks.length; i++){
      if(task == this.tasks[i]){
        this.tasks.splice(i, 1); //Se elimina del arreglo temporal
        //Lo eliminamos de la memoria:
        localStorage.setItem('tareas', JSON.stringify(this.tasks));
      }
    }
  }

}
