import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

NgClass
@Component({
  selector: 'app-readmore',
  standalone: true,
  imports: [NgClass],
  templateUrl: './readmore.component.html',
  styleUrl: './readmore.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadmoreComponent {
  @Input() text: string ;
  @Input() wordLimit:number;
  showMore: boolean ;
  constructor(){
    this.showMore =false;
  }
 
 
}
