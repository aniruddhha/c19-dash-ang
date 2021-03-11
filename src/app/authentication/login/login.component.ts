import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRestService } from '../http/auth.rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthRestService]
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup
  isSuccessFul: boolean = false

  constructor(
    private fb: FormBuilder,
    private authRest: AuthRestService,
    private router: Router
  ) {
    this.signInForm = fb.group({
      userName: fb.control('', Validators.required),
      password: fb.control('', Validators.required)
    })
    this.signInForm.valueChanges.subscribe(val => this.isSuccessFul = false)
  }

  ngOnInit(): void {
  }

  onSignIn() {
    console.log(this.signInForm.value)
    const { userName, password } = this.signInForm.value
    this.authRest.signIn(userName, password).subscribe(
      res => {
        localStorage.setItem('user', res.userName)
        this.router.navigate(['./dashboard/main'])
      },
      err => this.isSuccessFul = true
    )
  }
}
