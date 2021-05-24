import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { Employee } from '../employee';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  id:number;
  employee: Employee;
  constructor(private service: EmpService,private router: Router,private activatedRoute: ActivatedRoute, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getOneEmp(this.id).subscribe(
      data => {
      this.employee = data;
      console.log(this.employee);
    }, error => {
      console.log(error);
    });
  }


  updateEmployee() {
    this.service.employeeAdd(this.employee)
    .subscribe(data => {
      this.employee = new Employee();
      this.router.navigate(['/viewemp']);
    }, error => {
      console.log(error);
    });
  }

  
}
