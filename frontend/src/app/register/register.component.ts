import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  employee: any = {};
  isEditMode = false;
  techOptions = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Employee', value: 'Employee' }
  ];
  // selectedValue : string = '';
  empidlabel ="Employee ID";
  fullnamelable = "Full Name";
  phonenumberlable ="Phone Number";
  emaillable ="Email ID";
  passwordlable = "Password";
  dropdownlabel = "Employee Role";
  
  constructor(private employeeService: EmployeeService, private router: Router) {
    //console.log("constructor");
    
  }
    ngOnInit() {
    this.employee.employeeId = this.generateEmployeeId();
  }

  generateEmployeeId(): string {
    const prefix = 'EMP';
    const random = Math.floor(10 + Math.random() * 90); // 6-digit number
    return `${prefix}${random}`;
  }
  

  registerEmployee() {
    console.log(this.employee);
    
    this.employeeService.registerEmployee(this.employee).subscribe(() => {
      alert('Registered successfully!');
      this.router.navigate(['/']);
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
