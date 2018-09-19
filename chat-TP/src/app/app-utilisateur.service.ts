import { Injectable } from '@angular/core';
import {Utilisateur} from './utilisateur/utilisateur';
import {Salon} from './salon/salon';

@Injectable()
export class AppUtilisateurService {

  public user: Utilisateur;
  public salon: Salon;

}
