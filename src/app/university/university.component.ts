import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
})
export class UniversityComponent implements OnInit {
  universityList: any[] = [];
  successResponse: any;
  errormessage: any;
  showTable: boolean = false;
  student: any = {
    id: 1,
    name: 'john',
  };

  university: any = {
    countryCode: 'US',
    country: 'United States',
  };
  //university['status'] = 'open';
  // university: any = {
  //   countryCode: 'US',
  //   country: 'United States',
  //   status: 'open'
  // }

  ids: number[] = [];
  //this.ids.push(101) - [101]
  emp = [{ id: 1, name: 'tom' }];
  //this.emp.push( {id:2, name: 'John'}) -
  //  [
  //   {id:1, name: 'tom'},
  //   {id:2, name: 'John'}
  // ]
  //this.emp.length = 2

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {}
  searchUniversities() {
    this.universityService.getUniversitiesList().subscribe(
      (successResponse: any) => {
        this.showTable = true;
        successResponse.forEach((university) => {
          if(university.country === 'United States' || university.domains.length === 2) {
            this.universityList.push(university);
          }
          // if (
          //   university.country === 'United States' ||
          //   university.country === 'India'
          // ) {
          //   university['status'] = 'open';
          //   this.universityList.push(university);
          // }
          //  else {
          //   university['status'] = 'close';
          //   this.universityList.push(university);
          // }
        });
        console.log(this.universityList);
      },
      (errorResponse: any) => {
        this.errormessage = 'Bad Request';
        console.log('Bad Request For University');
      }
    );
  }
}
// t && t && t && t = t
// t && f = f
// f && t = f
//f && f = f

// t || t = t
// t || f = t
// f || t = t
// f || f = f
