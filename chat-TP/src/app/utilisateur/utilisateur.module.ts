import {UtilisateurComponent} from './utilisateur.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppConfigService} from '../app-config.service';
import {UtilisateurService} from './utilisateur.service';
import {UtilisateurDetailComponent} from './utilisateur-detail.component';
import {NgModule} from '@angular/core';



const routes: Routes = [
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'utilisateur/:id', component: UtilisateurDetailComponent }
];

@NgModule({
  declarations: [
    UtilisateurComponent,
    UtilisateurDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AppConfigService,
    UtilisateurService
  ]
})
export class UtilisateurModule {
}
