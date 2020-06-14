import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeServiceService} from "./employee-service/employee-service.service";
import {MatDialog} from "@angular/material/dialog";
import {AddEmployeeDialogComponent} from "../add-employee-dialog/add-employee-dialog.component";
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";
import {last} from "rxjs/operators";
import {EmpDetailsComponent} from "../emp-details/emp-details.component";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  empDetails: Employee[];
  emp: Employee;
  edit: boolean;

  displayColumns = ["id", "firstName", "lastName", "emailId", "role","delete", "details"];
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

  addEmployee(): void {

    const dialogRef =  this.dialog.open(AddEmployeeDialogComponent, {
      width: '250px',
      maxWidth: '300px',
      maxHeight: '450px',
      disableClose: true,
      data: this.emp
    });
    dialogRef.afterClosed().subscribe((emp: Employee) => {
      this.empService.addEmployees(emp).subscribe(result => {
        this.refreshPage();
      }, error => {
        console.log("Unable to add employees.")
      });
    })
  }

  empDelete(employee: Employee): void {
    const dialogRef =this.dialog.open(AlertDialogComponent, {
      width: '250px',
      maxWidth: '300px',
      data: 'Are you sure you want to delete information about: '+ employee.firstName+ ' '+ employee.lastName,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.empService.deleteEmployee(employee.id).subscribe(res => {
          this.refreshPage();
        }, error => console.log("Unable to delete the employee. Please try again!"));
      }
    }, error => console.log("Unable to get data from dialog"))

  }

  details(employee: Employee) {

    const dialogRef =  this.dialog.open(EmpDetailsComponent, {
      disableClose: true,
      width: '250px',
      maxWidth: '300px',
      data: employee
    });

  }

  editEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      disableClose: true,
      width: '250px',
      maxWidth: '300px',
      data: employee
    })

    dialogRef.afterClosed().subscribe((emp) =>{
      this.empService.addEmployees(emp).subscribe((res) => {
        this.refreshPage();
      }, error => console.error("Unable to save employee. ", error));
    })

  }

  isEdit() {
    this.edit? this.edit=false: this.edit = true;
  }
}
