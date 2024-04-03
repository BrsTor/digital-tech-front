import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})

export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      'surname': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      'username': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
      'avatar': new FormControl(null)
    })
  }



  onSubmit(event:Event) {
    event.preventDefault();
    console.log(this.signUpForm.value);
  }


}
