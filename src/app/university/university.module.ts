import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { UniversityComponent } from './university.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniversityComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule

  ]
})
export class UniversityModule { }
