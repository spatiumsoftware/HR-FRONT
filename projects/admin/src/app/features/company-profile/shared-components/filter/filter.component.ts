import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ButtonComponent } from '../button/button.component';
ButtonComponent
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [SliderModule,FormsModule,ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  isShow1 = false;
  isShow2 = false;
  isShow3 = false;
  

  rangeValues: number[] = [20, 80];
  add_filter =`btn2`;
  clear = `btn3`;
  @Input() title = 'Departments';
  @Input() title2 = 'Occupation';

  toggle1() {
    this.isShow1 = !this.isShow1;
  }
  toggle2() {
    this.isShow2 = !this.isShow2;
  }

  toggle3() {
    this.isShow3 = !this.isShow3;
  }


  @Input() choices:any = [
    {
      name: 'Sales',
      checked: false,
    },
    {
      name: 'Marketing',
      checked: false,
    },
    {
      name: 'HR',
      checked: false,
    },
  ];
  @Input() choices2:any = [
    {
      name: 'Sales',
      checked: false,
    },
    {
      name: 'Marketing',
      checked: false,
    },
    {
      name: 'HR',
      checked: false,
    },
  ];
  

}
