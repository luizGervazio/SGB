import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class MessageModalComponent {
  @Input() isOpen: boolean = false;
  @Input() type: 'success' | 'error' | 'edit' | 'remove' = 'success';
  @Input() title: string = '';
  @Input() description: string = '';

  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  handleConfirm() {
    this.confirm.emit();
    this.close.emit();
  }

  handleClose() {
    this.close.emit();
  }
}
