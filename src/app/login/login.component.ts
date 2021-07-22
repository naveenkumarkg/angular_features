import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SignInData } from '../service/auth.model';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(public authService: AuthenticationService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(myForm: SignInData){
    console.log(myForm)
    this.authService.isAuthenticated(myForm)
  }

}
