import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from './task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() words!: object;
  @Output() myArray = new EventEmitter<Array<ITask>>();
  public arrtask: Array<ITask> = [
    {
      newTask: "HTML",
      status: false,
    },
    {
      newTask: "CSS3",
      status: false,
    },
    {
      newTask: "SCSS",
      status: false,
    },
    {
      newTask: "JavaScript",
      status: false,
    },
    {
      newTask: "Jquery",
      status: false,
    },
    {
      newTask: "Angular",
      status: false,
    },
]
  isEdit = false;
  editIndex!: number;
  rewrite!: string;
  constructor() { 
    console.log(this.words); 
  }
  ngOnInit(): void {
  }
  changeStatus(task: ITask): void{
    task.status = !task.status;   
  }
  deleteTask(i:number): void {
    this.arrtask.splice(i, 1)
  }
  add(): void{
    this.myArray.emit(this.arrtask);
  }
  editTask(i: number): void{
    this.isEdit = !this.isEdit
    this.editIndex = i;
    this.rewrite = this.arrtask[i].newTask;
  }
  saveName(): void{
    this.isEdit = false;
    class NewTask{
      newTask: string;
      status: boolean;
      constructor(newTask: string, status: boolean){
        this.newTask = newTask;
        this.status = status;
      }
    }
    let newTask = new NewTask(this.rewrite, false)
    this.arrtask[this.editIndex] = newTask;
  
  }
}
