import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { HeadofCompanyComponent } from './headof-company/headof-company.component';
import { DetailsComponent } from './details/details.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-company-info-form',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    CommonModule,
    SocialIconsComponent,
    HeadofCompanyComponent,
    DetailsComponent,
  ],
  templateUrl: './company-info-form.component.html',
  styleUrl: './company-info-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyInfoFormComponent {
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      { label: 'Company Details' },
      { label: 'Head of Company' },
      { label: 'Additional' },
    ];
  }
}
