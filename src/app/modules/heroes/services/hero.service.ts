import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Hero} from '../../../models/hero.model';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) {

  }

  getHeroes() {
    return this.http.get<Hero[]>(environment.apiUrl + 'heroes');
  }
}
