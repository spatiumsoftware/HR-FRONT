import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-policies',
  templateUrl: './company-policies.component.html',
  styleUrls: ['./company-policies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class CompanyPoliciesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
