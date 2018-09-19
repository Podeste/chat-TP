import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from './message.service';
import {Message} from './message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  private message: Message;

  constructor(private route: ActivatedRoute, private messageService: MessageService ) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.message = this.messageService.findById(Number(params['id']));
    });
  }

  ngOnInit() {
  }

}
