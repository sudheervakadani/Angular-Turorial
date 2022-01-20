import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { BComponent } from './a/b/b.component';
import { CComponent } from './a/c/c.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DocumentChecklistComponent } from './document-checklist/document-checklist.component';
import { EligibilityCriteriaComponent } from './eligibility-criteria/eligibility-criteria.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProcesingTimeComponent } from './procesing-time/procesing-time.component';
import { VisaDetailsComponent } from './visa-details/visa-details.component';

const routes: Routes = [
  { path: 'company', component: CompanyDetailsComponent },
  { path: 'employees', component: EmployeeDetailsComponent },
  {
    path: 'visa', component: VisaDetailsComponent,
    children: [
      { path: 'processing', component: ProcesingTimeComponent },
      { path: 'document', component: DocumentChecklistComponent },
      { path: 'eligibility', component: EligibilityCriteriaComponent },
      { path: 'apply', component: ApplyOnlineComponent },
    ],
  },
  {
    path: 'A', component: AComponent,
    children: [
      { path: 'B', component: BComponent },
      { path: 'C', component: CComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
