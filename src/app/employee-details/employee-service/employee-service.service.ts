import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})


export class EmployeeServiceService {

  private baseUrl: "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  getEmployeeDetails(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>("http://localhost:8080/employees");
  }
}
