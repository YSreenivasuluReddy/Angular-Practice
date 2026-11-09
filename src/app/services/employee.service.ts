import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    { id: 1, name: 'Ravi', salary: 25000 },
    { id: 2, name: 'Kiran', salary: 30000 },
    { id: 3, name: 'Suresh', salary: 35000 }
  ];

  getEmployees() {
    return this.employees;
  }

}