import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

 email:string='';
 password:string='';

 constructor(
  private router:Router
 ){}

 login(){

   // ADMIN LOGIN

   if(
    this.email == 'admin@gmail.com'
    &&
    this.password == '123'
   )
   {

      this.router.navigate(
      ['/admin-dashboard']);

   }

   // COMPANY LOGIN

   else if(
    this.email == 'company@gmail.com'
    &&
    this.password == '123'
   )
   {

      this.router.navigate(
      ['/company-dashboard']);

   }

   // CANDIDATE LOGIN

   else if(
    this.email == 'candidate@gmail.com'
    &&
    this.password == '123'
   )
   {

      this.router.navigate(
      ['/candidate-dashboard']);

   }

   else{

      alert('Invalid Login');

   }

 }

}