import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class CandidateDashboardComponent {

 totalApplications:number = 120;

 atsScore:number = 82;

 interviews:number = 15;

 savedJobs:number = 40;

}