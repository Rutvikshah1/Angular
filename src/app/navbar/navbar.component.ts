import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title: string = 'Hellow ';

  messageFromTheChild: string = 'this is the message came from child, okay?';
  messageFromTheNavbar: string = 'Message from the navbar';
  @Input()
  fromParent!: string;
  @Input()
  oneMore!: string;

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit(this.messageFromTheChild);
  }
}
