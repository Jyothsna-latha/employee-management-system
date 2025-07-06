import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
  private apiUrl = 'http://localhost:7000/api/employees';

  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  registerEmployee(employee: any) {
    //console.log("Reg emp method"); 
    return this.http.post(`${this.apiUrl}/register`, employee);
  }

  updateEmployee(id: string, employee: any) {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }
}
