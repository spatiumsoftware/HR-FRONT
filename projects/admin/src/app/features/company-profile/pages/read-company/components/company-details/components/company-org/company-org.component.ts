import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-org',
  templateUrl: './company-org.component.html',
  styleUrls: ['./company-org.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class CompanyOrgComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
