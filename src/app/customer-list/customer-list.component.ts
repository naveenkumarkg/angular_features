import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { CustomerList } from './customerList.interface';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
employeeList: CustomerList[] = [];
  constructor(public employeeService: EmployeeService) {
    console.log('I am the constructor')
   
  }

  ngOnInit(): void {
    console.log('i am the ng oninit');
    this.callData();
  }

  callData() {
    console.log('data is called');
    
    this.employeeService.getEmployeeList().subscribe((data) => {
     
      this.employeeList = data
    })
  }


}
