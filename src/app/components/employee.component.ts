import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {

  employeeList: any[] = [];

  constructor(private employeeService: EmployeeService) {

    this.employeeList = this.employeeService.getEmployees();

  }

}