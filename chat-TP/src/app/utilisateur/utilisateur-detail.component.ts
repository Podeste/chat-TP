import {UtilisateurService} from './utilisateur.service';
import {ActivatedRoute} from '@angular/router';
import {Utilisateur} from './utilisateur';
import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './utilisateur-detail.component.html',
  styleUrls: ['./utilisateur-detail.component.css']
})
export class UtilisateurDetailComponent implements OnInit {

  private utilisateur: Utilisateur= new Utilisateur();

  constructor(private route: ActivatedRoute, private utilisateurService: UtilisateurService ) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      // @ts-ignore
      this.utilisateurService
        .findById((params['id']),true)
        .subscribe(resp => this.utilisateur = resp.json());
    });
  }

  ngOnInit() {
  }

}
