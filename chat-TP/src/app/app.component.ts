import { Component } from '@angular/core';
import {MessageService} from './message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  currentUsername: string;
  formSalon = false;
  constructor(private messageService: MessageService) {
    this.currentUsername = messageService.currentUsername;
  }
  public log() {
    if (this.currentUsername) {
      this.formSalon = true;
    }
  }
}
