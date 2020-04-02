import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  employees: Employee[] = [];

  constructor() {
  }

  postEmployee(formData: Employee) {
    this.employees.push(formData);
    alert(formData.fullName + ' with Employee Id ' + formData.empCode + ' added successfully');
  }

  putEmployee(formData: Employee) {
    let id = formData.employeeId;
    this.employees[id] = formData;
    console.log(this.employees);
    alert('Data of employee ' + formData.fullName + ' edited successfully');
  }

  deleteEmployee(id: number) {
    this.employees.splice(id, 1);
  }
}