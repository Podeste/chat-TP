import { Component, OnInit } from '@angular/core';
import {SalonService} from './salon.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  constructor(private salonService: SalonService ) {
  }

  ngOnInit() {
  }

  public list() {
    return this.salonService.findAll();
  }

}
