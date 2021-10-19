import { Component } from '@angular/core';
import { ITask } from './task-list/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework14';
  public newWords!: string;
  public newText!: string;
  public newObj!: object;
  public newArray!: Array<any>;
  sendTask(): void{
    this.newObj = { newTask: this.newWords = this.newText, status: false};
    this.newText = "";
    this.newArray.push(this.newObj) 
  }
  getArray(data: Array<ITask>): void {
    this.newArray = data;
  }
}
