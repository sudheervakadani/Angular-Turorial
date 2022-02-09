import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOAD_SPINNER } from './actions';
import { AppState } from './reducer';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  saveStudentDetails(studentData: any) {

    return this.http.post("http://localhost:3010/api/student", studentData);

  }

  getStudentDetails() {
   return this.http.get("http://localhost:3010/api/student");
  }

  signupUserApi(signUpDetails: any) {
    this.store.dispatch({type: LOAD_SPINNER, payload: true});
    this.http.post('http://localhost:3010/api/signup', signUpDetails).subscribe(
      (resp) => {
        this.store.dispatch({type: LOAD_SPINNER, payload: false});
        console.log(resp);
      },
      (err) => {
        this.store.dispatch({type: LOAD_SPINNER, payload: false});
        console.log(err);
      }
    );
  }
}


