import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../interfaces/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  
  @Input({required: true}) userId! : string;
  @Output() close = new EventEmitter();

  private tasksService = inject(TasksService)

  enteredTitle = '';
  enteredSummary = '';
  eneteredDueDate = '';

  onClose(){
    this.close.emit()
  }

  onSubmit(){

    this.tasksService.addUserTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.eneteredDueDate
    }, this.userId);
    this.close.emit();
  }
}
