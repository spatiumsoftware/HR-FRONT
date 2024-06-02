import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sortheader',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sortheader.component.html',
  styleUrl: './sortheader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortheaderComponent implements OnInit {
  @Output() display = new EventEmitter<string>();
  active: string;
  ngOnInit(): void {
    this.display.emit('col');
    this.active = 'col';
  }
}
