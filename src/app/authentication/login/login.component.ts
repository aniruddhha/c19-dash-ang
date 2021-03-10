import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRestService } from '../http/auth.rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthRestService]
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authRest: AuthRestService
  ) {
    this.signInForm = fb.group({
      userName: fb.control(''),
      password: fb.control('')
    })
  }

  ngOnInit(): void {
  }

  onSignIn() {
    console.log(this.signInForm.value)
    const { userName, password } = this.signInForm.value
    this.authRest.signIn(userName, password).subscribe(
      res => console.log(res)
    )
  }
}
