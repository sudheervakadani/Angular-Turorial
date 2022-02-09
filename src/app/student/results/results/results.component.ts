import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LOAD_SPINNER } from 'src/app/actions';
import { GrabService } from 'src/app/grab.service';
import { AppState } from 'src/app/reducer';
import { StudentService } from 'src/app/student.service';
import { StudentComponent } from '../../student.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  studentData: any;



  constructor(private router: Router,
    private grabService: GrabService, private store: Store<AppState>,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudent();
  }

  navigateToCreate(): void {
    this.router.navigate(['student/create']);
  }

  getStudent() {
    //this.store.dispatch({type: LOAD_SPINNER, payload: true});
    this.studentService.getStudentDetails().subscribe(
      (successResponse: any) => {
        this.studentData = successResponse.data;
        console.log(successResponse, 'get call Success');
        //setTimeout(() => {
            //      this.store.dispatch({type: LOAD_SPINNER, payload: false});

       // }, 2000)

      },
      () => {}
    );
  }

  navigateToUpdate(studentDetails: any) {
    this.grabService.updateDetailsInfo(studentDetails);
    console.log(studentDetails, "student data transfered");
    this.router.navigate(['student/update']);
  }
}

// student: any =  {name: "rakesh" id: 1234}
// student.id
