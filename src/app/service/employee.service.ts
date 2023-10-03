import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployee(): Observable<any> {
    return this.http.get(
      'https://onlinetestapi.gerasim.in/api/TeamSync/GetAllEmployee'
    );
  }

  createEmployee(obj: any): Observable<any> {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/TeamSync/CreateEmployee',
      obj
    );
  }

  getEmpById(id: number): Observable<any> {
    return this.http.get(
      'https://onlinetestapi.gerasim.in/api/TeamSync/GetEmployeeByEmpId?empid=' +
        id
    );
  }
  updateEmployee(id: number): Observable<any> {
    return this.http.post(
      'https://onlinetestapi.gerasim.in/api/TeamSync/UpdateEmployee',
      id
    );
  }
  deletetEmpById(id: number): Observable<any> {
    return this.http.get(
      'https://onlinetestapi.gerasim.in/api/TeamSync/DeleteEmployeeByEmpId?empid=' +
        id
    );
  }
}
