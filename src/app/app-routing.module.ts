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
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { AdsComponent } from './ads/ads.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full"},
  { path: 'home', component: HomeComponent},
  { path: 'company', component: CompanyDetailsComponent },
  { path: 'employees', component: EmployeeDetailsComponent },
  {
    path: 'visa', component: VisaDetailsComponent,
    children: [
      { path:'', redirectTo: "processing", pathMatch: 'full'},
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
{ path: 'menu', component: MenuComponent,
children: [
  { path:'', redirectTo: "ads", pathMatch: 'full'},
  { path: 'ads', component: AdsComponent },
  { path: 'mens', component: MensComponent },
  { path: 'womens', component: WomensComponent },
  { path: 'kids', component: KidsComponent },
],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
