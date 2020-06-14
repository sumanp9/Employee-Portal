import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../employee-details/employee-service/employee-service.service";

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.scss']
})
export class AddEmployeeDialogComponent implements OnInit {
  emp: Employee;

  constructor(public dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
              @Inject(MAT_DIALOG_DATA)public employee: Employee
              ) {
  }

  ngOnInit(): void {
    this.employee == null?
      this.emp = {id: null, firstName: '', lastName: '', emailId: '', role: ''}:
      this.emp = this.employee;

  }

  saveEmp() {
    if (this.emp.emailId != "" && this.emp.lastName != "" && this.emp.firstName !=""){
      this.dialogRef.close(this.emp);
    } else {
      alert('Enter values');
    }

  }
}
