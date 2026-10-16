import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  constructor(private auth:AuthService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
     // Read the student ID from the URL
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );
    // Get the student details using the ID
    const record = this.auth.getstudentbyid(id);

    if (record) {
      this.student = { ...record };
    } else {
      alert('Student not found');
      this.router.navigate(['/read']);
    }
  }
  // Read the student ID from the URL
    // const id = Number(
    //   this.route.snapshot.paramMap.get('id')
    // );

    
  student:any = {};
deleterecord() {
  if (!this.student.studentid) {
        return;
      }
  this.auth.deletestudent(this.student.studentid);

  alert('Student deleted successfully');
  this.router.navigate(['/read']);
}

cancel() {
  this.router.navigate(['/read']);
}
}
