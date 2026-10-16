import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
//import { ReadComponent } from '../read/read.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
student={
    studentid:0,
    studentname:'',
    studentemail:''
  }

  constructor(private http:AuthService){}

  create(){
    this.http.createrecord(this.student);
    console.log(this.student);
    //here once the values are stored then after i will reset the columns
    this.student = {
      studentid:0,
      studentname:'',
      studentemail:''
    };
  }
}
