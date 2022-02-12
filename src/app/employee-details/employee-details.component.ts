import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {



   ngOnInit() {
    console.log("ngOnInit IN  employee-details  executed");
  }

  constructor() {
    console.log("employee-details constructor executed")
   }

  ngOnDestroy() {
    console.log("ngOnDestroy IN  employee-details  executed");

  }


  }


