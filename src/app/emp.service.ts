import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private basePath = 'http://localhost:8090/';

  constructor(private _http:HttpClient) {}
    
    fetchEmployees():Observable<Employee[]> {
      return this._http.get<Employee[]>(`${this.basePath}/ShowAllEmployee`);
    }
    
    employeeAdd(employee: Employee): Observable<any> {
      return this._http.post(`${this.basePath}/AddEmployee`, employee);
    }

    getOneEmp(id: number): Observable<Employee> {
      return this._http.get<Employee>(`${this.basePath}/ShowEmployeeById/${id}`);
    }

    removeEmp(id: number): Observable<Employee> {
      return this._http.delete<Employee>(`${this.basePath}/DeleteEmployeeById/${id}`);
    }

    public loginvalidate(username:any,password:any)
  {
    return this._http.post(`${this.basePath}/loginvalidate/${username}/${password}`,{responseType:"text"});
  }


}
