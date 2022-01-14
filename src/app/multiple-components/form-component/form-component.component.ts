import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/university.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  country: string = 'united states';
  universityList: any[] = [];
  successResponse: any;
  errorResponse : any;
  errorMessage: any = 'Bad Request';
  showTable: boolean = false;



  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {
  }

  getResults() {
    this.universityService.getUniversitiesList(this.country).subscribe(
      (successResponse: any) => {
        this.showTable = true;
        this.universityList = successResponse;
        console.log(this.universityList);
      },
      (errorResponse: any) => {
        this.errorMessage  = errorResponse;
        console.log(this.errorMessage)
      }
    );
  }

}
