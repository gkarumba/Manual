import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { HomeComponent } from './modules/home/home.component';
import { CoreBankingComponent } from './modules/core-banking/core-banking.component';
import { CustomerInquiryComponent } from './modules/customer-inquiry/customer-inquiry.component';
import { CustomerJourneyComponent } from './modules/customer-journey/customer-journey.component';
import { LoanManagementComponent } from './modules/loan-management/loan-management.component';
import { UserManagementComponent } from './modules/user-management/user-management.component';
import { SaccoManagementComponent } from './modules/sacco-management/sacco-management.component';
import { ReportsComponent } from './modules/reports/reports.component';
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'core-banking',
      component: CoreBankingComponent
    },
    {
      path: 'customer-inquiry',
      component: CustomerInquiryComponent
    },
    {
      path: 'customer-journey',
      component: CustomerJourneyComponent
    },
    {
      path: 'reports',
      component: ReportsComponent
    },
    {
      path: 'loan-management',
      component: LoanManagementComponent
    },
    {
      path: 'user-management',
      component: UserManagementComponent
    },
    {
      path: 'sacco-management',
      component: SaccoManagementComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
