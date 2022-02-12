import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) { }

  ngOnInit(): void {
    this.createLogInForm();
  }

  logInUser() {
    this.appService.loginUserApi(this.logInForm.value);
  }

  createLogInForm() {
    this.logInForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }


}
