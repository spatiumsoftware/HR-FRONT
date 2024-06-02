import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-of-company',
  standalone: true,
  imports: [],
  templateUrl: './head-of-company.component.html',
  styleUrl: './head-of-company.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadOfCompanyComponent {

  @Input() headOfCompany:any=[
    {
      image:'../../../../assets/images/languages/uk-flag.svg',
      name:'Nahuel Daye',
      position:'Chief Executive Officer'
    },
    {
      image:'../../../../assets/images/languages/uk-flag.svg',
      name:'Nahuel Daye',
      position:'Chief Executive Officer'
    },
  ]

}
