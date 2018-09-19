import {Injectable} from '@angular/core';
import {Salon} from './salon';
import {Http} from '@angular/http';
import {AppConfigService} from '../app-config.service';

@Injectable()
export class SalonService {
  salons: Array<Salon> = [];
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

  findById(id: number, details?: boolean): any {
    if (details) {
      // let salon: Salon = new Salon();
      // this.http
      //   .get(this.apiUrl + id)
      //   .subscribe( resp => salon = resp.json());
      // this.http
      //   .get(this.apiUrl + id + '/utilisateur')
      //   .subscribe( resp => salon.utilisateurs = resp.json());
      // this.http
      //   .get(this.apiUrl + id + '/message')
      //   .subscribe( resp => salon.messages = resp.json());
      //
      // return salon;

      return this.http
        .get(this.apiUrl + id);
    }

    for (const salon of this.salons) {
      if (salon.id === id) {
        return salon;
      }
    }

    return null;
  }

  findAllUsers(id: number): any {

    return this.http
      .get(this.apiUrl + id + '/utilisateur');

  }

  findAllMessages(id: number): any {

    return this.http
      .get(this.apiUrl + id + '/message');

  }

  public save(salon: Salon) {
    if (salon) {
      if (!salon.id) {
        this.http
          .post(this.apiUrl, salon)
          .subscribe(resp =>
              this.salons.push(resp.json()),
            err => console.log(err)
          );
      } else {
        this.http
          .put(this.apiUrl + salon.id, salon)
          .subscribe(resp => {
              this.http
                .get(this.apiUrl)
                .subscribe(respo =>
                    this.salons = respo.json(),
                  err => console.log(err)
                );
            },
            err => console.log(err))
        ;
      }
    }
  }

  public delete(salon: Salon) {
    const pos: number = this.salons.indexOf(salon);

    this.http
      .delete(this.apiUrl + salon.id)
      .subscribe(resp => this.salons.splice(pos, 1),
        err => console.log(err))
    ;
  }


}
