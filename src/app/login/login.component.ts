import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../common/validators/customValidator.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // loginForm!: FormGroup;
  loginForm = new FormGroup({
    username: new FormControl('',
      [Validators.required, Validators.email, CustomValidators.cannotContainsSpace],
      [CustomValidators.shouldBeUnique]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private router: Router) {
    // this.createForm();
  }

  ngOnInit(): void { }

  get username2() {
    return this.loginForm.get('username');
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/dashboard']);
    }
  }

}
