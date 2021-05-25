import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit{

  res:any;
  sysuser:string="";
  sysUser:string="";
  sysPass:string="";
 
  constructor(private service: EmpService, private router: Router) { }

  ngOnInit(): void {
  }

  public loginvalidat(username:string,password:string) {
    let response=this.service.loginvalidate(username,password);
    response.subscribe(data=>
      {  
        this.res= data;
        console.log(this.res);
        this.sysuser=username;
        
      if(this.res=="Success"){
          this.router.navigate(['About']);
          sessionStorage.setItem("username",this.sysuser);
         }
         else{
          this.router.navigate(['EmployeeLogin']);
          alert("Invalid username and password");
         }
       
    },
    error => {
      console.log(error);
    });
  }


}
