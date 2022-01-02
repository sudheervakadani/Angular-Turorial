import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navigateToCompany() {
    console.log('company called');
  }

  navigateToEmployees() {
    console.log('Employees called');
  }

  navigateToVisa() {
    console.log('Visa called');
  }
}
