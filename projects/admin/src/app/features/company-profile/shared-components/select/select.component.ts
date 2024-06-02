import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() lable: string = '';
  
  @Input() options: any=[]
}
