import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  messageToDisplay: string = '';

  @ViewChild(ChildComponent) childComp!: ChildComponent;

  ngAfterViewInit() {
    this.messageToDisplay = this.childComp.name;
  }
  parentMessage: string = 'Message from the parent element';
}
