import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyOnlineComponent } from '../apply-online/apply-online.component';
import { DocumentChecklistComponent } from '../document-checklist/document-checklist.component';
import { EligibilityCriteriaComponent } from '../eligibility-criteria/eligibility-criteria.component';
import { ProcesingTimeComponent } from '../procesing-time/procesing-time.component';
import { VisaDetailsComponent } from './visa-details.component';

const routes: Routes = [
  {
    path: '',
    component: VisaDetailsComponent,
    children: [
      { path: 'processing', component: ProcesingTimeComponent },
      { path: 'document', component: DocumentChecklistComponent },
      { path: 'eligibility', component: EligibilityCriteriaComponent },
      { path: 'apply', component: ApplyOnlineComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaDetailsRoutingModule { }
