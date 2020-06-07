import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeServiceService} from "./employee-service/employee-service.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEmployeeDialogComponent} from "../add-employee-dialog/add-employee-dialog.component";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  empDetails: Employee[];

  displayColumns = ["id", "firstName", "lastName", "emailId", "role","delete"];
  constructor(private empService: EmployeeServiceService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.refreshPage();
  }

  private refreshPage() {
    //TODO: call emp service and perform API calls to get emp details
    this.empService.getEmployeeDetails().subscribe((result: Array<Employee>) =>{
      console.log("THe list size is: "+ result.length);
      this.empDetails = result;
      });
}

  addEmployee() {
    const dialogRef =  this.dialog.open(AddEmployeeDialogComponent, {
      width: '250px',
      maxWidth: '300px',
      maxHeight: '450px'
    });
    dialogRef.afterClosed().subscribe((emp: Employee) => {
      this.empService.addEmployees(emp).subscribe(result => {
        this.refreshPage();
      }, error => {
        console.log("Unable to add employees.")
      });
    })
  }
}
