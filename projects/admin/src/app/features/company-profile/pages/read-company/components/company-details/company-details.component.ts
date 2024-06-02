import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../../../shared-components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavBarComponent],
  standalone: true,
})
export class CompanyDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
