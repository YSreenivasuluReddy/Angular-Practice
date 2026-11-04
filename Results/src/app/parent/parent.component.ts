import { Component } from '@angular/core';
import { EducationService } from '../education.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
constructor(public res:EducationService){}
}
