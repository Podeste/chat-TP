import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {AppConfigService} from './app-config.service';
import {RouterModule, Routes} from '@angular/router';
import {SalonModule} from './salon/salon.module';
import {MessageModule} from './message/message.module';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes),
    SalonModule,
    MessageModule
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
