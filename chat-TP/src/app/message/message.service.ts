import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Message } from './message';
import { AppConfigService } from '../app-config.service';

@Injectable()
export class MessageService {
  messages: Array<Message> = new Array<Message>();
  apiUrl= '';
  constructor(private http: Http, private appConfig: AppConfigService) {
    this.apiUrl = appConfig.apiUrl + '/message/';

    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.messages = resp.json());

  }

  public findAll() {
    return this.messages;
  }

  public findById(id: number, http?: boolean): any {
    if (http) {
      return this.http
        .get(this.apiUrl + id);
    }

    for (const message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }

    return null;
  }

  public save(message: Message) {
    if (message) {
      if (!message.id) {
        this.http
          .post(this.apiUrl, message)
          .subscribe(
            resp => this.messages.push(resp.json()),
            err => console.log(err)
          );
      } else {
        this.http
          .put(this.apiUrl + message.id, message)
          .subscribe(
            resp => null,
            err => console.log(err)
          );
      }
    }
  }

  public delete(message: Message) {
    const pos: number = this.messages.indexOf(message);

    this.http
      .delete(this.apiUrl + message.id)
      .subscribe(
        resp => this.messages.splice(pos, 1),
        err => console.log(err)
      );
  }
}
