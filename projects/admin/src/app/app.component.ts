import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './core/components/header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { CompanyInfoFormComponent } from './features/company-profile/shared-components/company-info-form/company-info-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, HeaderComponent, SidebarComponent,CompanyInfoFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  _translateService = inject(TranslateService);
  display: boolean;
  title = 'admin';

  ngOnInit(): void {
    this._translateService.use('en');
  }
}
