import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name: string = 'Rutvik Shah';
  messageFromChild: string = 'This message has came from child to parent!';
  @Input() parentMessage!: string;
}
