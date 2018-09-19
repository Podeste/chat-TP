import {Injectable} from '@angular/core';
import {Salon} from './salon';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';

@Injectable()
export class SalonService {
  salons: Array<Salon> = new Array<Salon>();
  apiUrl = '';


  constructor(private http: Http, private urlService: AppConfigService) {
    this.apiUrl = urlService.apiUrl + '/salon/';
    this.http
      .get(this.apiUrl)
      .subscribe(resp =>
          this.salons = resp.json(),
        err => console.log(err)
      );
  }

  findAll() {
    return this.salons;
  }
}
