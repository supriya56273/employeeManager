import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeesList: Employee[];

  constructor(private employeeService: EmployeeService) { 
    this.employeesList = this.employeeService.employees;
  }

  ngOnInit() {}

  populateForm(emp: Employee, index:number) {
    emp.employeeId = index;
    this.employeeService.formData = emp;
  }

  onDelete(id) {
    this.employeeService.deleteEmployee(id);
  }
}
