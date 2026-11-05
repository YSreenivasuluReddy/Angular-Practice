import { Component } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html'
})
export class JobListComponent {

 jobs = [

  {
    jobTitle:'Angular Developer',
    location:'Hyderabad',
    salary:'8 LPA'
  },

  {
    jobTitle:'.NET Core Developer',
    location:'Bangalore',
    salary:'10 LPA'
  },

  {
    jobTitle:'Full Stack Developer',
    location:'Chennai',
    salary:'12 LPA'
  }

 ]

}