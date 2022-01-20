import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CComponent } from './a/c/c.component';
import { GrabService } from './grab.service';

@Injectable({
  providedIn: 'root'
})
export class GetService {


  errorResponse: any;
  errorMessage: any = 'Bad Request';

  constructor(private http: HttpClient, private grabService: GrabService) { }

  getResultsOf(country: string) {
    console.log('2');
    this.grabService.updateSpinnerInfo(true);
    this.http.get(`http://universities.hipolabs.com/search?country=${country}`).subscribe(
      (successResponse: any) => {
        this.grabService.updateSpinnerInfo(false);
        console.log('3');
        this.grabService.grabData(successResponse);
        console.log(successResponse);
      },
      (errorResponse: any) => {
        this.grabService.updateSpinnerInfo(false);
        this.errorMessage = errorResponse;
        console.log(this.errorMessage);
      }
    );
  }
}
