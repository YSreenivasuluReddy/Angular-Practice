import { Component } from '@angular/core';
import { EducationService } from './education.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Results';
  constructor(public res:EducationService){}
}
