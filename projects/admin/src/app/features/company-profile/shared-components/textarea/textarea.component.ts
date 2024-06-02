import { CommonModule, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgStyle,CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent {
  @Input() lable: string = '';
  @Input() placeholder: string = '';
 
  text: string = '';
  charCount: number = 0;
 
  updateCharacterCount(): void {
    this.charCount = this.text.length;
  }

}
