import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.employeeService.formData = {
      employeeId: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.employeeId == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.employeeService.postEmployee(form.value);
    this.resetForm(form);
  }

  updateRecord(form: NgForm) {
    this.employeeService.putEmployee(form.value);
    this.resetForm(form);
  }
}
