import {Routes} from '@angular/router';
import {ListComponent} from './components/list/list.component';

export const heroesRoutes: Routes = [
  {
    path: 'heroes',
    component: ListComponent
  },
  {
    path: 'matches',
    component: ListComponent
  }
];
