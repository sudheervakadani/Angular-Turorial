import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrabService } from '../grab.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy{

  studentData: any;
  userLoginStatus: boolean = false;

  constructor(private router: Router, private grabService: GrabService) {}


  ngOnInit(): void {
    this.grabService.studentDetails.subscribe(
      (data) => {
        this.studentData = data;

      }
    );


    this.grabService.userLoggedInStatusSubject.subscribe((status) => {
      this.userLoginStatus = status;
    })
  }


  navigateToHome(){
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
  navigateToA(){
    this.router.navigate(['A']);
    console.log('A Called')
  }

  navigateToMenu() {
    this.router.navigate(['menu']);
  }

  navigateToStudent() {
    this.router.navigate(['student']);
  }

  navigateToSignUp() {
    this.router.navigate(['signup']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    //this.grabService.updateDetailsInfo({});
   // this.studentData ={};
  }
}
