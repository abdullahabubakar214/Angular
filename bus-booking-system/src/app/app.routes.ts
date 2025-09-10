import { Routes } from '@angular/router';
import { Search } from './pages/search/search';
import { Booking } from './pages/booking/booking';
export const routes: Routes = [
  {
    //default route
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: Search,
  },
  {
    path: 'booking/id',
    component: Booking,
  },
];
