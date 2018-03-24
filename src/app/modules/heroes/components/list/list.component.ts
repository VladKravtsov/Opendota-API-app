import {Component, OnInit} from '@angular/core';
import {HeroService} from '../../services/hero.service';
import {Hero} from '../../../../models/hero.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  heroes: Observable<Hero[]>;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
