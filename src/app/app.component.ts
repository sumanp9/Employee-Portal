import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn: boolean;
  userName: string;
  password: string;

  constructor(private route: Router) {
  }


  login() {
    if (this.userName == "user" && this.password == "pass"){
      this.loggedIn = true;
    } else {
      alert("Incorrect username or password");
    }
  }

  openBottomSheet() {
    alert("UserName: user & password: pass");
  }
}
