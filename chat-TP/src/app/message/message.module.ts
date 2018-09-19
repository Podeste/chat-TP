import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MessageComponent} from './message.component';
import {MessageDetailComponent} from './message-detail.component';
import {MessageService} from './message.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';



const routes: Routes = [
  {path: 'message', component: MessageComponent},
  {path: 'message/:id', component: MessageDetailComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MessageComponent,
    MessageDetailComponent
  ],
  providers: [MessageService]
})
export class MessageModule { }
