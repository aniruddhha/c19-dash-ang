import { ThrowStmt } from '@angular/compiler';
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
  isErr: boolean = false
  errMsg: string = ''

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
      mobile: fb.control('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}$')]))
    })
    this.signUpForm.valueChanges.subscribe(val => this.isErr = false)
  }

  ngOnInit(): void {
  }

  onSignUp() {
    const appUser = this.signUpForm.value as AppUser

    if (this.signUpForm.get('confirmPassword')?.value == appUser.password) {
      this.authRest.signUp(appUser).subscribe(res => {
        this.signUpForm.reset()
        this.router.navigate(['./auth/']);
      }, err => {
        this.isErr = true
        this.errMsg = 'problem is signing up'
      })
    } else {
      this.isErr = true
      this.errMsg = 'password and confirm should be same'
    }
  }

  numberOnly(event: KeyboardEvent, size: number): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57)) && (size < 10)
  }
}
