import { Component, OnInit } from '@angular/core';
import {SalonService} from './salon.service';
import {Salon} from './salon';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  private formSalon: Salon = null;

  constructor(private salonService: SalonService ) {
  }

  ngOnInit() {
  }

  public list() {
    return this.salonService.findAll();
  }

  public add() {
    this.formSalon = new Salon();
  }

  public edit(id: number) {
    this.formSalon = this.salonService.findById(id);
  }

  public save() {
    this.salonService.save(this.formSalon);
    this.formSalon = null;
  }

  public delete(id: number) {
    this.salonService.delete(this.salonService.findById(id));
  }

  public cancel() {
    this.formSalon = null;
  }
}
