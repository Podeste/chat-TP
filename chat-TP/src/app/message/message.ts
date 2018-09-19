import {Utilisateur} from '../utilisateur/utilisateur';


export class Message {

  id: number;
  texte: string;
  dateMsg: Date;
  expediteur: Utilisateur;


  constructor(id?: number, texte?: string, dateMsg?: Date, expediteur?: Utilisateur) {
    this.id = id;
    this.texte = texte;
    this.dateMsg = dateMsg;
    this.expediteur = expediteur;
  }
}
