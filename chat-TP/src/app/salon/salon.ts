import {Utilisateur} from '../utilisateur/utilisateur';
import {Message} from '../message/message';

export class Salon {

  id: number;
  nom: string;
  description: string;
  dateCreation: Date;
  createur: Utilisateur;
  messages: Array<Message>;
  utilisateurs: Array<Utilisateur>;

  constructor(id?: number, nom?: string, description?: string, dateCreation?: Date, createur?: Utilisateur, messages?: Array<Message>,
              utilisateurs?: Array<Utilisateur>) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateCreation = dateCreation;
    this.createur = createur;
    this.messages = messages;
    this.utilisateurs = utilisateurs;
  }
}
