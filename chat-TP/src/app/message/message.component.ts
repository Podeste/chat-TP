import {Component, OnInit} from '@angular/core';
import {MessageService} from './message.service';
import {Message} from './message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private formMessage: Message = null;

  private buttonAdd = true;

  private currentUsername: string;

  constructor(private messageService: MessageService) {
    this.currentUsername = messageService.currentUsername;
  }

  ngOnInit() {
  }

  public list() {
    return this.messageService.findAll();
  }

  public add() {
    this.formMessage = new Message();
    this.buttonAdd = false;
  }

  public edit(id: number) {
    this.buttonAdd = false;
    this.formMessage = this.messageService.findById(id);
  }

  public save() {
    this.messageService.save(this.formMessage);
    this.annul();
  }



  public annul(){
    this.formMessage = null;
    this.buttonAdd = true;
  }


}
