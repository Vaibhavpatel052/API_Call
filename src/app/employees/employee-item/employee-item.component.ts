import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.modal';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
})
export class EmployeeItemComponent implements OnInit {
  @Input() EmployeeItem: Employee;

  constructor() {}

  ngOnInit() {}
}
