import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SortheaderComponent } from '../../../../shared-components/sortheader/sortheader.component';
import { ColumnCompanyCardComponent } from './components/column-company-card/column-company-card.component';
import { RowCompanyCardComponent } from './components/row-company-card/row-company-card.component';

@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SortheaderComponent,
    ColumnCompanyCardComponent,
    RowCompanyCardComponent,
  ],
  standalone: true,
})
export class ViewCompaniesComponent {
  display!: string;
  companies = [
    {
      name: 'Company 1',
      image: '../../../../../../../assets/images/company/SVG/file-text.svg',
      companyType: 'Main',
      registrationNo: '23124362',
      ceo: 'John Smith',
      employees: 54,
      performance: 0.83,
    },
    {
      name: 'Company 2',
      image: '../../../../../../../assets/images/company/SVG/file-text.svg',
      companyType: 'subsidiary',
      registrationNo: '23124362',
      ceo: 'John Smith',
      employees: 54,
      performance: 0.83,
    },
    {
      name: 'Company 2',
      image: '../../../../../../../assets/images/company/SVG/file-text.svg',
      companyType: 'subsidiary',
      registrationNo: '23124362',
      ceo: 'John Smith',
      employees: 54,
      performance: 0.83,
    },
    {
      name: 'Company 2',
      image: '../../../../../../../assets/images/company/SVG/file-text.svg',
      companyType: 'subsidiary',
      registrationNo: '23124362',
      ceo: 'John Smith',
      employees: 54,
      performance: 0.83,
    },
  ];
}
