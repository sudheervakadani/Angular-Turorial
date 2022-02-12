import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visa-details',
  templateUrl: './visa-details.component.html',
  styleUrls: ['./visa-details.component.css']
})
export class VisaDetailsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  navigateToVisa(section: string) {
    this.router.navigate(['visa/' + section]);
    // console.log(`visa/${section}`);

  }

}
