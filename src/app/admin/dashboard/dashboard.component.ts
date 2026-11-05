import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class AdminDashboardComponent {

 totalUsers:number = 1200;

 companies:number = 140;

 jobs:number = 500;

}