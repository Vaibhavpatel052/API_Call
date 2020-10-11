import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.modal';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  recipes: Employee[];
  employees: Employee[];
  constructor(private employeesService:EmployeesService) { }

  ngOnInit() {
    this.employees = this.employeesService.getAllEmployees();
  }

}
