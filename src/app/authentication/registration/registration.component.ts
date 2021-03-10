import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private authRest: AuthRestService,
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group({
      userName: fb.control(''),
      email: fb.control(''),
      password: fb.control(''),
      confirmPassword: fb.control(''),
      mobile: fb.control('')
    })
  }

  ngOnInit(): void {
  }

  onSignUp() {
    const appUser = this.signUpForm.value as AppUser
    this.authRest.signUp(appUser).subscribe(res => {
      console.log(res)
    })
  }
}
