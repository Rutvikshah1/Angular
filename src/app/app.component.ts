import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  @ViewChild(NavbarComponent) childComp!: NavbarComponent;

  messageToDisplay: string = '';
  ngAfterViewInit() {
    this.messageToDisplay = this.childComp.messageFromTheChild;
  }

  reciveMessage($event: any) {
    this.title = $event;
  }
  parentMessage: string = 'message from the parent';
  anotherMessage: string = 'this is one more message from the parent component';
}
