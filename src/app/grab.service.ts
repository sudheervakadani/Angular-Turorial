import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StudentI } from './Models/student';
import { UniversityI } from './Models/University';

@Injectable({
  providedIn: 'root'
})
export class GrabService {

  //university behaviuor subj
  universityData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  universityDataSubject = this.universityData.asObservable();

  studentDetails: BehaviorSubject<any> = new BehaviorSubject<any>({});
  studentDetailsSubject = this.studentDetails.asObservable();

  loggedInUserInfo: BehaviorSubject<any> = new BehaviorSubject<any>({});
  loggedInUserInfoSubject = this.loggedInUserInfo.asObservable();

  userLoggedInStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userLoggedInStatusSubject = this.userLoggedInStatus.asObservable();



  //handle spinner
  spinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  spinnerSubject = this.spinner.asObservable();


  // studentDetails: StudentI  = {
  //   id: 10,
  //   name: 'Tom',
  //   //email: 'tom@gmail.com'
  // }

  constructor() { }

  grabData(data: UniversityI[]): void {
    this.universityData.next(data);
    console.log(data);
    console.log('4');
  }

  updateSpinnerInfo(spinnerValue: boolean) {
    this.spinner.next(spinnerValue);
  }

  getEmpName(id: number): string {
    return 'Bhargav Ram';
  }

  getEmployeeIds(): number[] {
    return [1,2,3];
  }

  getEmployeeDetails(): {id: number, courseName: string} {
    return {id: 1, courseName: 'CS'};
  }

  updateDetailsInfo(studentDetails: any) {
    this.studentDetails.next(studentDetails);
  }

  updateLoggedInUserInfoInBs(userInfo: any, loggedInUserStatus: boolean) {
    this.loggedInUserInfo.next(userInfo);
    this.userLoggedInStatus.next(loggedInUserStatus);
  }


}
