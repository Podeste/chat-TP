import {Injectable} from '@angular/core';
import {Utilisateur} from './utilisateur';
import {AppConfigService} from '../app-config.service';
import {Http} from '@angular/http';


@Injectable()
export class UtilisateurService {
  utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();
  apiUrl: string;

  constructor(private http: Http, private appConfig: AppConfigService) {
    this.apiUrl = this.appConfig.apiUrl + '/utilisateur/';

    this.http
      .get(this.apiUrl)
      .subscribe(resp => this.utilisateurs = resp.json());

  }

  public findAll() {
    return this.utilisateurs;
  }

  public findById(id: number, details?: boolean): any {
    if (details) {
      return this.http.get(this.apiUrl + id);
    }
    for (const utilisateur of this.utilisateurs) {
      if (utilisateur.id === id) {
        return utilisateur;
      }
    }

    return null;
  }

  public save(utilisateur: Utilisateur) {
    if (utilisateur) {
        this.http
          .post(this.apiUrl, utilisateur)
          .subscribe(
            resp => this.utilisateurs.push(utilisateur),
            err => console.log(err)
          );
      }else {
        this.http
          .put(this.apiUrl + utilisateur.id, utilisateur)
          .subscribe(
            resp => null,
            err => console.log(err)
          );
      }
    }
    public delete(utilisateur: Utilisateur) {
    const pos: number = this.utilisateurs.indexOf(utilisateur);

    this.utilisateurs.splice(pos, 1);
  }
}

