import { Component } from '@angular/core';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
      constructor(public res:EducationService){}
      
}
