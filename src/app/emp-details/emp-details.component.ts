import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Employee} from "../employee-details/employee-service/employee-service.service";

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  emp: Employee;

  constructor(public dialogRef: MatDialogRef<EmpDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) employee: Employee) {
    this.emp = employee;
  }

  ngOnInit(): void {
  }

  printEmpDetails() {
      window.print();
  }
}
