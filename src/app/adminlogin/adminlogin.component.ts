import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username = 'admin'
  password = ''
  invalidLogin = false

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['viewemp'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}