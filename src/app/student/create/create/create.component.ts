import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  studentForm: FormGroup;
  errorMessage: any= 'Bad Request';

  constructor( private fb: FormBuilder, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.createStudentForm();
  }

  createStudentForm() {
    this.studentForm = this.fb.group({

    studentName: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    studentId: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    studentPhoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    course: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    year: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
    country: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
    })
  }

  saveStudent() {
    this.studentService.saveStudentDetails(this.studentForm.value).subscribe(
      (successResponse: any) => {
        this.router.navigate(['student/results']);
        console.log(successResponse, 'return Response');
      },
      (errorResponse: any) => {
        this.errorMessage = errorResponse;
        console.log(this.errorMessage);
      }
    );
    console.log(this.studentForm);
    console.log(this.studentForm.value);
  }


}
