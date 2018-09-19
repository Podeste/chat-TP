import { NgModule } from '@angular/core';
import {SalonComponent} from './salon.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SalonService} from './salon.service';
import {RouterModule, Routes} from '@angular/router';
import { SalonDetailComponent } from './salon-detail.component';

const routes: Routes = [
  {path: 'salon', component: SalonComponent},
  {path: 'salon/:id', component: SalonDetailComponent}
];

@NgModule({
  declarations: [
    SalonComponent,
    SalonDetailComponent
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
