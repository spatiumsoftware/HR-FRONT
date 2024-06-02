import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonComponent } from '../../../../../../shared-components/button/button.component';

@Component({
  selector: 'app-column-company-card',
  standalone: true,
  imports: [CardModule, ButtonModule, ButtonComponent, CommonModule, NgClass],
  templateUrl: './column-company-card.component.html',
  styleUrl: './column-company-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnCompanyCardComponent {
  @Input() subsidiary = false;
  @Input() company: any = {
    name: '',
    logoPath: '',
    companyType: '',
    commerialRegisterationNumber: '',
    ceo: '',
    employeeNumber: 0,
    // performance: 0,
  };
  @Input() bgColor: string;

  currentStyles: string = `btn`;
}
