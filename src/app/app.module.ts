import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { VisaDetailsComponent } from './visa-details/visa-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    CompanyDetailsComponent,
    EmployeeDetailsComponent,
    VisaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
