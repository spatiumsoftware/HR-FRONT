import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { DepartmentCardComponent } from './components/department-card/department-card.component';

@Component({
  selector: 'app-company-departments',
  templateUrl: './company-departments.component.html',
  styleUrls: ['./company-departments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DepartmentCardComponent],
  standalone: true,
})
export class CompanyDepartmentsComponent {
  depts: any[] = [
    {
      name: 'Finance',
      image: '../../../../../assets/images/company/SVG/file-text.svg',
      companyType: 'Main',
      registrationNo: '23124362',
      ceo: 'John Smith',
      employees: 54,
      performance: 0.83,
    },
    {
      name: 'HR',
      image: '../../../../../assets/images/company/SVG/file-text.svg',
      companyType: 'Secound',
      registrationNo: '23124362',
      ceo: 'John Smith',
      employees: 54,
      performance: 0.83,
    },
    {
      name: 'HR',
      image: '../../../../../assets/images/company/SVG/file-text.svg',
      companyType: 'Secound',
      registrationNo: '23124362',
      ceo: 'John Smith',
      employees: 54,
      performance: 0.83,
    },
    {
      name: 'HR',
      image: '../../../../../assets/images/company/SVG/file-text.svg',
      companyType: 'Secound',
      registrationNo: '23124362',
      ceo: 'John Smith',
      employees: 54,
      performance: 0.83,
    },
  ];
}
