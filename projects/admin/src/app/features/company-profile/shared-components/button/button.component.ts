import { CommonModule, NgClass, NgStyle } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { ButtonModule } from "primeng/button";
NgClass;
@Component({
  selector: "app-button",
  standalone: true,
  imports: [ButtonModule, NgClass, CommonModule, NgStyle],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() Text: string;
  @Input() btnClass: string;
  @Input() img: string;
  @Input() isOutlined: boolean;
  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();

  emitEvent() {
    this.btnClick.emit();
  }
}
