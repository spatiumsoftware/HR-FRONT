import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [InputGroupModule,InputGroupAddonModule],
  templateUrl: './social-icons.component.html',
  styleUrl: './social-icons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialIconsComponent {

}
