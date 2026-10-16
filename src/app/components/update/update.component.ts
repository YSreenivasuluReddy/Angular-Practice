import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
student: any = {};

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {
    //it gets the current route information at that moment.
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    //here based on the route id it gets the student details.
    const record = this.auth.getstudentbyid(id);

    if (record) {
      this.student = { ...record };
    } else {
      alert('Student not found');
      this.router.navigate(['/read']);
    }
  }

  updaterecord() {
    const result = this.auth.updatestudent(
      this.student.studentid,
      this.student
    );

    if (result) {
      alert('Student updated successfully');
      this.router.navigate(['/read']);
    } else {
      alert('Student not found');
    }
  }

  cancel() {
    this.router.navigate(['/read']);
  }
}
