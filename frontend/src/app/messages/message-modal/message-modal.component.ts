import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css'],
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
})
export class MessageModalComponent {
  @Input() isOpen: boolean = false;
  @Input() type: 'success' | 'error' | 'edit' | 'remove' = 'success';
  @Input() title: string = '';
  @Input() description: string = '';

  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  private readonly icones = {
    success: 'circle-check',
    error: 'circle-x',
    edit: 'pencil',
    remove: 'trash-2',
  };

  get icone(): string {
    return this.icones[this.type] ?? 'circle-alert';
  }

  handleConfirm() {
    this.confirm.emit();
    this.close.emit();
  }

  handleClose() {
    this.close.emit();
  }
}
