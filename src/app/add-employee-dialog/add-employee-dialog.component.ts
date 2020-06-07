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
              ) {
    this.emp = {id: null, firstName: '', lastName: '', emailId: '', role: ''};
  }

  ngOnInit(): void {

  }

  saveEmp() {

    if (this.emp.emailId != "" && this.emp.lastName != "" && this.emp.firstName !=""){
      this.dialogRef.close(this.emp);
    } else {
      alert('Enter values');
    }

  }
}
