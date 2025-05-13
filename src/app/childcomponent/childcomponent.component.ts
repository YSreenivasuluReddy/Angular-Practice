import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.css'
})
export class ChildcomponentComponent {
  @Input() title="";
  @Input() images="";
}
