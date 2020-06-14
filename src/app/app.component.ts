import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {element} from "protractor";

declare const FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  token: any;
  logged: boolean = false;
  user = {name: 'Hello'};
  loggedIn: boolean;
  userName: string;
  password: string;

  constructor(private route: Router) {
  }

  statusChangeCallback(response: any) {
    if (response.status = 'connected'){
      console.log("Connected!!");
    } else {
      this.login();
    }
  }
 // Use this URL: https://dzone.com/articles/login-with-facebook-and-google-using-angular-8

  login() {
    FB.login(function (result) {
      this.logged = true;
      this.token = result;
    }, {scope: 'user'});
    /*if (this.userName == "user" && this.password == "pass"){
      this.loggedIn = true;
    } else {
      alert("Incorrect username or password");
    }*/
  }

  openBottomSheet() {
    alert("UserName: user & password: pass");
  }
}
