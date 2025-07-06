import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  searchTerm = '';
  loggedInUser: any;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    this.loadEmployees();
  }
  loadEmployees() {    
    if (this.filteredEmployees.length === 0) {
      this.employeeService.getAllEmployees().subscribe((data) => {
        if (this.loggedInUser?.role === 'Admin') {
          this.employees = data;
        } else {
          // Only show the logged-in employee
          this.employees = data.filter(
            (emp) => emp._id === this.loggedInUser._id
          );
        }
      });
    } else {
      this.employees = this.filteredEmployees;
    }
  }
  filterEmployees() {
    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      (e) =>
        e.fullName.toLowerCase().includes(term) ||
        e.email.toLowerCase().includes(term) ||
        e.role.toLowerCase().includes(term)
    );
    this.employees = this.filteredEmployees;
  }
  addNewEmployee() {
    this.router.navigate(['/register']);
  }
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }
}
