import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../../data/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from '../interfaces/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) id! : string;
 @Input({required: true}) name : string | undefined;

  constructor(private tasksService: TasksService) {}

 isAddingNewTask = false;

 get selectedUserTask(){
  return this.tasksService.getUserTasks(this.id);
 }

 onComplete(completedTaskId: string){
  this.tasksService.removeTask(completedTaskId);
 }

 addNewtask(){
  this.isAddingNewTask = true;
 }

 onCloseAddnewTask(){
  this.isAddingNewTask = false
 }

}
