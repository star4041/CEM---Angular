import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-emp-dash',
  templateUrl: './emp-dash.component.html',
  styleUrls: ['./emp-dash.component.css']
})
export class EmpDashComponent implements OnInit {

  constructor(private service: EmpService,  private router: Router, public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

}
