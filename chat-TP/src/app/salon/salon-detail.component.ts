import {Component, OnInit} from '@angular/core';
import {Salon} from './salon';
import {ActivatedRoute} from '@angular/router';
import {SalonService} from './salon.service';
import {Utilisateur} from '../utilisateur/utilisateur';

@Component({
  selector: 'app-salon-detail',
  templateUrl: './salon-detail.component.html',
  styleUrls: ['./salon-detail.component.css']
})
export class SalonDetailComponent implements OnInit {

  private salon: Salon = new Salon();

  constructor(private route: ActivatedRoute, private salonService: SalonService) {
    this.salon.createur = new Utilisateur();
    // this.salon.utilisateurs = new Array<Utilisateur>();
    this.route.params.subscribe(params => {
      console.log(params);
      this.salonService.findById(Number(params['id']), true)
        .subscribe(resp => this.salon = resp.json());
      this.salonService.findAllUsers(Number(params['id']))
      .subscribe(resp => this.salon.utilisateurs = resp.json());
      this.salonService.findAllMessages(Number(params['id']))
        .subscribe(resp => this.salon.messages = resp.json());

  }

);
}

ngOnInit()
{
}

}
