import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { HomeComponent } from './modules/home/home.component';
import { CoreBankingComponent } from './modules/core-banking/core-banking.component';
import { CustomerInquiryComponent } from './modules/customer-inquiry/customer-inquiry.component';
import { CustomerJourneyComponent } from './modules/customer-journey/customer-journey.component';
import { LoanManagementComponent } from './modules/loan-management/loan-management.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { SaccoManagementComponent } from './modules/sacco-management/sacco-management.component';
import { ReportsComponent } from './modules/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoreBankingComponent,
    CustomerInquiryComponent,
    CustomerJourneyComponent,
    LoanManagementComponent,
    UserManagementComponent,
    SaccoManagementComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
