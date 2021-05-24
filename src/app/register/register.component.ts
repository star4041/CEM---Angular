import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-rootr',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  employee: Employee;
  constructor(private service: EmpService,private router: Router, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.employee = new Employee();
  }

  
  addEmployee() {
    this.service.employeeAdd(this.employee)
    .subscribe(data => {
      this.employee = new Employee();
      this.router.navigate(['/viewemp']);
    }, error => {
      console.log(error);
    });
  }
}
