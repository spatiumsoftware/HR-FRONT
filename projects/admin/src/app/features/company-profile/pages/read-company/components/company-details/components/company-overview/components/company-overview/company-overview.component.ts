import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReadmoreComponent } from '../../../../../../../../shared-components/readmore/readmore.component';



@Component({
  selector: 'app-company-overview',
  standalone: true,
  imports: [ReadmoreComponent],
  templateUrl: './company-overview.component.html',
  styleUrl: './company-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyOverviewComponent{

  data: string = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";


}
