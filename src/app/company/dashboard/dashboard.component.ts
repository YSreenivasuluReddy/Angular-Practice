import { Component } from '@angular/core';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class CompanyDashboardComponent {

 totalJobs:number = 45;

 applicants:number = 240;

 interviews:number = 30;

}