import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GrabService } from 'src/app/grab.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy {

  updateStudentForm: FormGroup;

  constructor(private fb: FormBuilder, private grabService: GrabService) { }

  ngOnInit(): void {
    this.updateStudent();
    this.grabService.studentDetailsSubject.subscribe(
      (data) => {
        if(data) {
          this.patchValuesIntoForm1(data);
        }
      }

    );

  }

  patchValuesIntoForm1(studentDetails) {
    this.updateStudentForm.patchValue({
      studentName: studentDetails.studentName,
      studentId: studentDetails.studentId,
      course: studentDetails.course,
      year: studentDetails.year,
      studentPhoneNumber: studentDetails.studentPhoneNumber,
      country: studentDetails.country
    })
  }

  updateStudent() {
    this.updateStudentForm = this.fb.group({

    studentName: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    studentId: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    studentPhoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    course: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    year: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
    country: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    })
  }

  ngOnDestroy(): void {
    this.grabService.updateDetailsInfo({});

  }

}
