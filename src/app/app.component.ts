import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ConditionsEx';
  studentdetails = [{
    studentid : 1,
    studentname :"Sreenu Reddy Y",
    studentage : 26,
    course:"Dot Net"
  },
  {
    studentid:2,
    studentname:"Shashank Reddy K",
    studentage:25,
    course:"CRM"
  },
 {
   studentid:3,
   studentname:"Deepak Reddy A",
   studentage:27,
   course:"Angular"
 },
 {
  studentid:4,
  studentname:"Preetham Reddy K",
  studentage:25,
  course:"webstack"
 },
 {
  studentid:5,
  studentname:"Adarsh Reddy A",
  studentage:27,
  course:"Data Analyst"
 }
]
}
