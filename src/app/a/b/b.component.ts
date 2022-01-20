import { Component, OnInit } from '@angular/core';
import { GetService } from '../../get.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  country: string = '';
  showTable: boolean = false;


  constructor(private getService: GetService) { }

  ngOnInit(): void {
  }

  getResults() {
    console.log('1');
    this.getService.getResultsOf(this.country);

  }
}
