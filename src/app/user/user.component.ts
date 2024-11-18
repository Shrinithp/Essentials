import { Component, computed, EventEmitter, Input, input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../../../data/dummy-users';
import { type User } from '../interfaces/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
// export class UserComponent {
//   selectedUser  = DUMMY_USERS[0];

//   get imagePath() {
//     return 'users/' + this.selectedUser.avatar;
//   }

//   onSelectUser(){
//     this.selectedUser = DUMMY_USERS[1];
//     }
// }

export class UserComponent {

  @Input({required: true}) selected!: boolean;
  @Input({required:true}) user! : User;
  @Output() select = new EventEmitter();

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();


  get imagePath(){
    return 'users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
    }
}