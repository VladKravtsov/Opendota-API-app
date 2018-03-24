import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './components/list/list.component';
import {RouterModule} from '@angular/router';
import {heroesRoutes} from './heroes.routes';
import {HeroService} from './services/hero.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroesRoutes)
  ],
  declarations: [ListComponent],
  providers: [HeroService]
})
export class HeroesModule {
}
