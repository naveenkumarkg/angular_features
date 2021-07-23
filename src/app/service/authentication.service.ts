import { Injectable } from '@angular/core';
import { SignInData } from './auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly formData = new SignInData('john@gmail.com','password');
  isAuthenticate = false;
  constructor(private route: Router) { }


  isAuthenticated(data: SignInData): boolean{
    if(this.formData.email === data.email && this.formData.password === data.password){
      this.isAuthenticate = true;
      this.route.navigate(['dashboard']);
      return true;
    }
    alert('Wrong Credentials')
    return true;

  }

  logout(){
    this.isAuthenticate = false;
    this.route.navigate([''])
  }
}
