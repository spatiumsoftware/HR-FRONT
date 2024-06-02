import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonComponent } from '../../../../../../shared-components/button/button.component';

@Component({
  selector: 'app-row-company-card',
  standalone: true,
  imports: [CardModule, ButtonComponent, CommonModule, NgClass],
  templateUrl: './row-company-card.component.html',
  styleUrl: './row-company-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowCompanyCardComponent {
  @Input() main = false;
  @Input() company: any = {
    name: '',
    logoPath: '',
    companyType: '',
    commerialRegisterationNumber: '',
    ceo: '',
    employeeNumber: 0,
    // performance: 0,
  };
  main_btn: string = `btn`;
  gray_btn: string = `btn2`;
}
