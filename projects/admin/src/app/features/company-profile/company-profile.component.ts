import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-component',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  standalone: true,
})
export class MyComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
