import { Routes } from '@angular/router';
import { AuthenticationComponent } from './features/authentication/authentication.component';
import { EmailComponent } from './features/authentication/pages/passwordReset/components/email/email.component';
import { ResetComponent } from './features/authentication/pages/passwordReset/components/reset/reset.component';
import { PasswordResetComponent } from './features/authentication/pages/passwordReset/passwordReset.component';
import { BlockedComponent } from './features/authentication/pages/sign-in/components/blocked/blocked.component';
import { CompaniesComponent } from './features/authentication/pages/sign-in/components/companies/companies.component';
import { CounterComponent } from './features/authentication/pages/sign-in/components/counter/counter.component';
import { DetailsComponent } from './features/authentication/pages/sign-in/components/details/details.component';
import { EnterPasswordComponent } from './features/authentication/pages/sign-in/components/enter-password/enter-password.component';
import { IdentityComponent } from './features/authentication/pages/sign-in/components/identity/identity.component';
import { SignInComponent } from './features/authentication/pages/sign-in/sign-in.component';
import { CompanyFilesComponent } from './features/authentication/pages/sign-up/components/company-files/company-files.component';
import { CompanyProfileComponent } from './features/authentication/pages/sign-up/components/company-profile/company-profile.component';
import { UserProfileComponent } from './features/authentication/pages/sign-up/components/user-profile/user-profile.component';
import { SignUpComponent } from './features/authentication/pages/sign-up/sign-up.component';
import { StartAuthComponent } from './features/authentication/pages/start-auth/start-auth.component';
import { VerificationComponent } from './features/authentication/shared-components/otpVerification/verification.component';
import { TimeOutComponent } from './features/authentication/shared-components/timeOut/timeOut.component';
import { VerifiedComponent } from './features/authentication/shared-components/verified/verified.component';
import { WrapperComponent } from './features/authentication/shared-components/wrapper/wrapper.component';

export const routes: Routes = [
  // start auth (eager loading)
  {
    // Authentication feature
    path: '',
    component: AuthenticationComponent,
    children: [
      // wrapper and pages display inside of it
      {
        path: '',
        component: WrapperComponent,
        children: [
          { path: '', component: StartAuthComponent },
          {
            path: 'sign-up',
            component: SignUpComponent,
            children: [
              { path: '', component: UserProfileComponent },
              { path: 'company-profile', component: CompanyProfileComponent },
              { path: 'company-files', component: CompanyFilesComponent },
            ],
          },
          { path: 'counter', component: CounterComponent },
          { path: 'blocked', component: BlockedComponent },
          {
            path: 'otpVerification',
            component: VerificationComponent,
          },
          {
            path: 'sign-in',
            component: SignInComponent,
            children: [
              { path: '', component: DetailsComponent },
              { path: 'identity', component: IdentityComponent },
              { path: 'enterPassword', component: EnterPasswordComponent },
            ],
          },
          {
            path: 'passwordReset',
            component: PasswordResetComponent,
            children: [
              { path: 'email', component: EmailComponent },
              { path: 'reset', component: ResetComponent },
            ],
          },
        ],
      },
      // pages which display out of wrapper
      {
        path: 'verified/:from',
        component: VerifiedComponent,
      },
      { path: 'companies', component: CompaniesComponent },
      { path: 'timeOut', component: TimeOutComponent },
    ],
  },
  {
    path: 'companyProfile',
    loadChildren: () =>
      import('./features/company-profile/company-profile.routing').then(
        (m) => m.routes
      ),
  },
  // end auth
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
