import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../domain/app.user';
import { AuthRestService } from '../http/auth.rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AuthRestService]
})
export class RegistrationComponent implements OnInit {

  signUpForm: FormGroup
  isSuccessFul: boolean = false

  constructor(
    private authRest: AuthRestService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      userName: fb.control('', Validators.required),
      email: fb.control('', Validators.compose([Validators.required, Validators.email])),
      password: fb.control('', Validators.required),
      confirmPassword: fb.control('', Validators.required),
      mobile: fb.control('', Validators.required)
    })
    this.signUpForm.valueChanges.subscribe(val => this.isSuccessFul = false)
  }

  ngOnInit(): void {
  }

  onSignUp() {
    const appUser = this.signUpForm.value as AppUser
    this.authRest.signUp(appUser).subscribe(res => {
      this.signUpForm.reset()
      this.router.navigate(['./auth/']);
    }, err => {
      this.isSuccessFul = true
    })
  }
}
