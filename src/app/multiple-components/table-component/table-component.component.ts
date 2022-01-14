import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  @Input() universityListData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
