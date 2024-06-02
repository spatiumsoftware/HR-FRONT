import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CompanyInfoFormComponent } from '../company-info-form/company-info-form.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    SidebarModule,
    ButtonModule,
    CompanyInfoFormComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  isclose: boolean;
}
