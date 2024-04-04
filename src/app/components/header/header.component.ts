import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    // Implement sign in functionality
    console.log('Sign Up clicked');
  }

  signIn() {
    // Implement sign in functionality
    console.log('Sign In clicked');
  }

  signOut() {
    // Implement sign out functionality
    console.log('Sign Out clicked');
  }
}
