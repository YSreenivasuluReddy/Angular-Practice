import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-read',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {

  studentdetails: any[] = [];

  constructor(private http: AuthService) {
  }
  //ngOnInit() is used to initialize the component tasks,such as retrieving the route parameter,fetch the data from the services,and loads the api's.
  ngOnInit(){
      this.getrecords();
  }

  getrecords() {
    this.studentdetails = this.http.getstudentrecord();
    console.log(this.studentdetails);
  }

}
