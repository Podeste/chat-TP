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

  constructor(private messageService: MessageService) {
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

  public delete(id: number) {
    this.messageService.delete(this.messageService.findById(id));
  }

  public annul(){
    this.formMessage = null;
    this.buttonAdd = true;
  }


}
