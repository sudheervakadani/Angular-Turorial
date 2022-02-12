import { Component, OnInit } from '@angular/core';
import { GrabService } from 'src/app/grab.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  universityInfo: any[] = [];
  university: any[] = [];

  constructor(private grabService: GrabService) { }

  ngOnInit(): void {
    this.grabService.universityData$.subscribe(
      (universityData: any) => {
        this.universityInfo = universityData;
        console.log(universityData);

      }
    );

  }

}
