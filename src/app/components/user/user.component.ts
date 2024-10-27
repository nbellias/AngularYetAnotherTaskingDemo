import { Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';

import { User } from '../../models/user';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected = false;
  @Output() select = new EventEmitter<string>();
  
  // Inputs and outputs with Signals
  /* 
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  select = output<string>();
  */

  get imagePath() {
    return `img/users/${this.user.avatar}`;
  }
  
  // With Signals
  /* imagePath = computed(() => `img/users/${this.avatar()}`);
 */
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
