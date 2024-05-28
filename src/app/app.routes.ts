import { ContactsComponent } from './components/contacts/contacts.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LocationsComponent } from './components/locations/locations.component';
import { SidenavComponent } from './staticbars/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactsComponent,
  },
  {
    path:'location',
    component: LocationsComponent
  }
];
