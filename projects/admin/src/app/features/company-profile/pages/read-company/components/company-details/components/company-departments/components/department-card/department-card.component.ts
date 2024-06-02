import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';

import { ButtonModule } from 'primeng/button';

import { CommonModule, NgClass } from '@angular/common';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonComponent } from '../../../../../../../../shared-components/button/button.component';

@Component({
  selector: 'app-department-card',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    ButtonComponent,
    CommonModule,
    NgClass,
    KnobModule,
    FormsModule,
    MenuModule,
  ],
  templateUrl: './department-card.component.html',
  styleUrl: './department-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentCardComponent {
  isshow: boolean = false;
  @Input() main = false;
  @Input() deptobj: any = {
    name: '',
    image: '',
    companyType: '',
    registrationNo: '',
    ceo: '',
    employees: 0,
    performance: 0,
  };

  value: number = 40;
  currentStyles: string = `btn2`;
  buttonstyles: string = `btn`;

  /*menu*/
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: '',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Export',
            icon: 'pi pi-upload',
          },
        ],
      },
    ];
  }
}
