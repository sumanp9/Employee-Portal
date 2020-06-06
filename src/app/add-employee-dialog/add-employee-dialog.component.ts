import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.scss']
})
export class AddEmployeeDialogComponent implements OnInit {

  fName: string;
  lName: string;
  emailId: string;
  role: string;


  constructor(public dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
              ) { }

  ngOnInit(): void {

  }

}
