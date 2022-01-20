import { Component, OnInit } from '@angular/core';
import { GrabService } from './grab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  showSpinner: boolean = false;

  constructor(private grabSerive: GrabService) {
    console.log("constructor works");
  }
  ngOnInit(): void {
    this.grabSerive.spinnerSubject.subscribe((spineerInfo) => {
      console.log(spineerInfo);
      this.showSpinner = spineerInfo;
    })
  }
}
