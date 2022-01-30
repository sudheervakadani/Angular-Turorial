import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  saveStudentDetails(studentData: any) {
    return this.http.post("http://localhost:3010/api/student", studentData);

  }

  getStudentDetails() {
   return this.http.get("http://localhost:3010/api/student");
  }

  signupUserApi(signUpDetails: any) {
    this.http.post('http://localhost:3010/api/signup', signUpDetails).subscribe(
      (resp) => {},
      (err) => {}
    );
  }
}


