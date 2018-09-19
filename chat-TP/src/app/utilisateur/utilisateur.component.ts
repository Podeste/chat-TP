import {Component, OnInit} from '@angular/core';
import {Utilisateur} from './utilisateur';
import {UtilisateurService} from './utilisateur.service';


@Component({
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  private formUtilisateur: Utilisateur = null;

  constructor(private utilisateurService: UtilisateurService) {
  }

  ngOnInit() {
  }

  public list() {
    return this.utilisateurService.findAll();
  }

  public add() {
    this.formUtilisateur = new Utilisateur();
  }

  public edit(id: number) {
    this.formUtilisateur = this.utilisateurService.findById(id);
  }

  public save() {
    this.utilisateurService.save(this.formUtilisateur);
    this.formUtilisateur = null;
  }
  public delete(id: number) {
      this.utilisateurService.delete(this.utilisateurService.findById(id));
    }
  public cancel() {
      return this.formUtilisateur = null;
    }
  }
