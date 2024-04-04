import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpService } from '../../services/sign-up/sign-up.service';

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [SignUpService]
})

export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  userRoles = ['admin', 'user'];

  constructor(private sigUpService: SignUpService) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      'surname': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      'username': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
      'role': new FormControl('user'),
      'avatar': new FormControl(null)
    })
  }



  onSubmit() {
    this.sigUpService.createUser(this.signUpForm.value)
  }


}
