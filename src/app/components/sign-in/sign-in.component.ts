import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/sign-up/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  providers: [AuthService]
})
export class SignInComponent {

  signInForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    })
  }



  onSubmit() {
    console.log('login');
    this.authService.logIn(this.signInForm.value)
  }

}
