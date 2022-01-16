import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaDetailsRoutingModule } from './visa-details-routing.module';
import { VisaDetailsComponent } from './visa-details.component';
import { ProcesingTimeComponent } from '../procesing-time/procesing-time.component';
import { DocumentChecklistComponent } from '../document-checklist/document-checklist.component';
import { EligibilityCriteriaComponent } from '../eligibility-criteria/eligibility-criteria.component';
import { ApplyOnlineComponent } from '../apply-online/apply-online.component';



@NgModule({
  declarations: [
    VisaDetailsComponent,
    ProcesingTimeComponent,
    DocumentChecklistComponent,
    EligibilityCriteriaComponent,
    ApplyOnlineComponent
  ],
  imports: [
    CommonModule,
    VisaDetailsRoutingModule
  ]
})
export class VisaDetailsModule { }
