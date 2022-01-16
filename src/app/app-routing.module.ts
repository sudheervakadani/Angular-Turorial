import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DocumentChecklistComponent } from './document-checklist/document-checklist.component';
import { EligibilityCriteriaComponent } from './eligibility-criteria/eligibility-criteria.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MultipleComponentsComponent } from './multiple-components/multiple-components.component';
import { ProcesingTimeComponent } from './procesing-time/procesing-time.component';
import { VisaDetailsComponent } from './visa-details/visa-details.component';

const routes: Routes = [
  { path: 'company', component: CompanyDetailsComponent },
  { path: 'employees', component: EmployeeDetailsComponent },
 { path: 'visa', loadChildren: () => import('./visa-details/visa-details.module').then(m => m.VisaDetailsModule)},

  // {path: 'visa', component: VisaDetailsComponent,
  //   children: [
  //     { path: 'processing', component: ProcesingTimeComponent },
  //     { path: 'document', component: DocumentChecklistComponent },
  //     { path: 'eligibility', component: EligibilityCriteriaComponent },
  //     { path: 'apply', component: ApplyOnlineComponent },
  //   ],
  // },
  {path:'university', loadChildren: () => import('./university/university.module').then(m => m.UniversityModule)},

  { path: 'multiple-component', component: MultipleComponentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
