import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { AuthenticationService } from '../service/authentication.service';
import { Employee } from './../employee';

@Component({
  selector: 'app-root',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
  message: string;
  employees: Employee[]; 
  constructor(private service: EmpService,  private router: Router, public loginService:AuthenticationService) { }
  

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(){
    return this.service.fetchEmployees().subscribe(
    data => {
      console.log(data);
      this.employees = data;
    }, error => {
      console.log(error);
    }
    );
  }

  goToAddEmployee(){
    this.router.navigate(['/r']);
  }

  callEdit(id: number){
    this.router.navigate(['/editEmp',id]);
  }

  callView(id: number){
    this.router.navigate(['/viewProfile']);
  }

  deleteEmp(id: number){
    this.employees.splice(id,1);
    if (confirm('Do you want to delete?')) {
      this.service.removeEmp(id).subscribe(
        data => {
          console.log('delete')
        this.fetchEmployees();
      }, error => {
        console.log(error);
      });
    } else {
      this.message = '';
    }
  }


}
