import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-employee',
  templateUrl: './company-employee.component.html',
  styleUrls: ['./company-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class CompanyEmployeeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
