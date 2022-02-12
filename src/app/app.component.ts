import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GrabService } from './grab.service';
import { AppState } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  showSpinner: boolean = false;

  constructor(private grabSerive: GrabService, private store: Store<AppState>) {
    console.log("constructor works");
  }
  ngOnInit(): void {

    this.store.select((state)=>state.homeState.loadingStatus).subscribe(
      (response)=>{
        this.showSpinner = response;
      }
    );

    // this.grabSerive.spinnerSubject.subscribe((spineerInfo) => {
    //   console.log(spineerInfo);
    //   this.showSpinner = spineerInfo;
    // })
  }
}
