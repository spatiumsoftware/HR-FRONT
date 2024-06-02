import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyCardComponent {
  @Input() companyProfile:any ={
    logoPath : '',
    name : '',
    companyType : '',

    totalEmployeesNumbers : '',
    website : '',

    twitter : '',
    statusName:'',

    facebook : '',


  }


}
