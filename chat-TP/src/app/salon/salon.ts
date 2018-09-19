export class Salon {

  id: number;
  nom: string;
  description: string;
  dateCreation: Date;

  constructor(id?: number, nom?: string, description?: string, dateCreation?: Date) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateCreation = dateCreation;
  }
}
