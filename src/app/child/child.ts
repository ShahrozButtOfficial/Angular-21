import { Component, input, EventEmitter, Output , signal} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name=input<string>();

  // @Output() notify = new EventEmitter<string>();

  // sendToParent() {
  //   this.notify.emit('Hello from Child');
  // }

  message= signal<string>('Hello from Child!');

  updateMessage(newMessage: string) {
    this.message.set(newMessage);
  }
}
