import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
import { AComponent } from './a/a.component';
import { BComponent } from './a/b/b.component';
import { CComponent } from './a/c/c.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { AdsComponent } from './ads/ads.component';
import { StudentComponent } from './student/student.component';
import { CreateComponent } from './student/create/create/create.component';
import { ResultsComponent } from './student/results/results/results.component';
import { UpdateComponent } from './student/results/results/update/update.component';
import { SignupComponent } from './signup/signup.component';

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
    AComponent,
    BComponent,
    CComponent,
    HomeComponent,
    MenuComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
    AdsComponent,
    StudentComponent,
    CreateComponent,
    ResultsComponent,
    UpdateComponent,
    SignupComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
