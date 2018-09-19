import { NgModule } from '@angular/core';
import {SalonComponent} from './salon.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SalonService} from './salon.service';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'salon', component: SalonComponent}
];

@NgModule({
  declarations: [
    SalonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SalonService
  ]
})
export class SalonModule { }
