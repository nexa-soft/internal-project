import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupUsers: any[] = [];
  signupObj:any ={
    email: '',
    password: ''
  };
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
  }


  constructor(private router: Router) {}


  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }



}
