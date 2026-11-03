import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
  name ="";
  name1=""
  fun1(){
    this.name1=this.name;
  
  }
}
