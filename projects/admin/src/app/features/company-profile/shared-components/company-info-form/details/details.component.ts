import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../../input/input.component';
import { SelectComponent } from '../../select/select.component';
import { TextareaComponent } from '../../textarea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  companycatiegories: any = [
    {
      label: 'Software Development',
      value: 'Software Development',
    },
    {
      label: 'IT',
      value: 'IT',
    },
  ];
  white = `btn`;
  green = `btn2`;
  gray = `btn3`;
  next() {
    console.log('next');
    // this.router.navigate(['/company-profile/employees']);
  }

  /*selecttttttttt*/
  countries: any[] | undefined;

  selectedCountry: any | undefined;

  ngOnInit() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
  }
}
