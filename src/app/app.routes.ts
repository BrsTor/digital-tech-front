import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'signin', component: SignInComponent}
];
