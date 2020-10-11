import { Injectable } from '@angular/core';
import { Employee } from './employee.modal';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employees: Employee[] = [
    {
      id: 'e1',
      title: 'Nidhi',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 'e2',
      title: 'Bhumi',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    {
      id: 'e3',
      title: 'Het',
      imageUrl: 'https://api.time.com/wp-content/uploads/2017/12/joey-degrandis-hsam-memory.jpg'
    },
    {
      id: 'e4',
      title: 'Aadi',
      imageUrl: 'https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830?k=6&m=589098830&s=612x612&w=0&h=Ut2FNWjS9CxXG5DdDduLqOEhcV0RBzRvsLrh9qS5EaY='
    },
  ];
  
  constructor() { }

  getAllEmployees() {
    return [...this.employees];
  }

  geteEmployee(employeeId: string){
    return{...this.employees.find(employee => {
      return employee.id === employeeId;
    }),};
  }
}
