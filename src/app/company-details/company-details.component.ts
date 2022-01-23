import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  student: any = { name: 'ajay', id: 1994, age: 29 };

  updatedStudent: any = { ...this.student, status: 'major' };

  studentsList: any = [
    { name: 'tom', id: 10, age: 27 },
    { name: 'Kevin', id: 10, age: 22 },
    { name: 'Mike', id: 10, age: 25 },

  ];
  //this.studentList.push({name:'angRea', id: 19, age: 9});

  //st[0].age
  // student: any = {name: "ajay", id:1994, dob:"01/12/1994", status: "major"}
  // studentsList: any = [
  //   { name: 'tom', id: 10, age: 27, status: 'major },
  //   { name: 'Kevin', id: 10, age: 22, status: 'minor },
  //   { name: 'Mike', id: 10, age: 21, status: 'minir' },
  // ];

  constructor() {}

  funName(stuId: number) {

  }

  ngOnInit(): void {
    this.studentsList.forEach(
      (student: any) => {
        if(student.age < 25) {
          console.log('minor');
        } else {
          console.log('Major');
        }
      }
    );
  }
}
