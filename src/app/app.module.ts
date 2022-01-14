import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { VisaDetailsComponent } from './visa-details/visa-details.component';
import { ProcesingTimeComponent } from './procesing-time/procesing-time.component';
import { DocumentChecklistComponent } from './document-checklist/document-checklist.component';
import { EligibilityCriteriaComponent } from './eligibility-criteria/eligibility-criteria.component';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UniversityComponent } from './university/university.component';
import { FormsModule } from '@angular/forms';
import { MultipleComponentsComponent } from './multiple-components/multiple-components.component';
import { FormComponentComponent } from './multiple-components/form-component/form-component.component';
import { TableComponentComponent } from './multiple-components/table-component/table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    CompanyDetailsComponent,
    EmployeeDetailsComponent,
    VisaDetailsComponent,
    ProcesingTimeComponent,
    DocumentChecklistComponent,
    EligibilityCriteriaComponent,
    ApplyOnlineComponent,
    UniversityComponent,
    MultipleComponentsComponent,
    FormComponentComponent,
    TableComponentComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
