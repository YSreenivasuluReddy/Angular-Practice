import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {

 name:string='Sreenivasulu';

 email:string='sreenu@gmail.com';

 mobile:string='9876543210';

 updateProfile(){

   alert('Profile Updated');

 }

}