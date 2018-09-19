import {Utilisateur} from '../utilisateur/utilisateur';


export class Message {

  id: number;
  texte: string;
  date: Date;
  expediteur: Utilisateur;


  constructor(id?: number, texte?: string, date?: Date, expediteur?: Utilisateur) {
    this.id = id;
    this.texte = texte;
    this.date = date;
    this.expediteur = expediteur;
  }
}
