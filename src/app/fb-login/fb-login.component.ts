import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-fb-login',
  templateUrl: './fb-login.component.html',
  styleUrls: ['./fb-login.component.scss']
})
export class FbLoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  fbLogin() {

    this.userService.fbLogin().then(()=>{
      console.log("call service");
      this.router.navigate([AppComponent]);
    })

  }
}
