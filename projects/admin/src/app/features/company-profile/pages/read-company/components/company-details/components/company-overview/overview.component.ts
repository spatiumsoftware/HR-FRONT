import { Result } from './../../../../../../../authentication/models/resetPassword.interface';
import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeadOfCompanyComponent } from './components/head-of-company/head-of-company.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyOverviewComponent } from './components/company-overview/company-overview.component';
import { NavBarComponent } from '../../../../../../shared-components/nav-bar/nav-bar.component';
import { CompanyServiceService } from '../../../../../../Services/company-service.service';
import { IcompanyDetails } from '../../../../../../Models/icompany-details';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    NavBarComponent,
    HeadOfCompanyComponent,
    CompanyCardComponent,
    CompanyDetailsComponent,
    CompanyOverviewComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnChanges,OnInit{
  companyDetails:any;
  constructor(private _CompanyServiceService:CompanyServiceService) {

  }
  ngOnInit(): void {
   
    this._CompanyServiceService.getCompanyDetails().subscribe({
      next: (res) => {
        this.companyDetails=res.result;
      },  
      error: (err) => {
        console.log(err)
      }
    })

  }
    
  
  ngOnChanges(): void {

    
  }

}
