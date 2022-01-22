import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToCompany() {
    this.router.navigate(['company']);
    console.log('company called');
  }

  navigateToEmployees() {
    this.router.navigate(['employees']);
    console.log('Employees called');
  }

  navigateToVisa() {
    this.router.navigate(['visa']);
    console.log('Visa called');
  }

  navigateToUniversity() {
    this.router.navigate(['university']);
    console.log('university');
  }
  navigateToMultipleComponents() {
    this.router.navigate(['multiple-component']);
    console.log('Multiple-Components');
  }
}
