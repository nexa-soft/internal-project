import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
  
  loginObj: any = {
    email: '',
    password: '',
  };
  signupUsers: any;
 
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData!= null){
      this.signupUsers = JSON.parse(localData);
    }
  }
   
  
  onLogin(){
  const isUserExist = this.signupUsers.find((m: { userName: any; password: any; }) => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
if(isUserExist != undefined){
  this.router.navigate(['/welcome']);
}
else {
  alert('Wrong credentials');
}
}  
};
   


