import { Routes } from '@angular/router';
import { MyComponentComponent } from './company-profile.component';

import { CompanyDepartmentsComponent } from './pages/read-company/components/company-details/components/company-departments/company-departments.component';
import { CompanyEmployeeComponent } from './pages/read-company/components/company-details/components/company-employee/company-employee.component';
import { CompanyJobsComponent } from './pages/read-company/components/company-details/components/company-jobs/company-jobs.component';
import { CompanyOrgComponent } from './pages/read-company/components/company-details/components/company-org/company-org.component';
import { CompanyPoliciesComponent } from './pages/read-company/components/company-details/components/company-policies/company-policies.component';
import { ViewCompaniesComponent } from './pages/read-company/components/view-companies/view-companies.component';
import { OverviewComponent } from './pages/read-company/components/company-details/components/company-overview/overview.component';
import { CompanyDetailsComponent } from './pages/read-company/components/company-details/company-details.component';
export const routes: Routes = [
  {
    path: '',
    component: MyComponentComponent,
    children: [
      {
        path: 'viewCompanies',
        component: ViewCompaniesComponent,
      },
      {
        path: 'details/:company',
        component: CompanyDetailsComponent,
        children: [
          { path: 'overview', component: OverviewComponent },
          { path: 'departments', component: CompanyDepartmentsComponent },
          { path: 'employees', component: CompanyEmployeeComponent },
          { path: 'jobs', component: CompanyJobsComponent },
          { path: 'policies', component: CompanyPoliciesComponent },
          { path: 'orgChart', component: CompanyOrgComponent },
        ],
      },
    ],
  },
];
