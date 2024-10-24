import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mfee-project-edit-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.scss'
})
export class EditModalComponent {
  @Input() modalText: string;
  @Output() modalTextChange = new EventEmitter<string>();

  updateModalText(): void {
    this.modalTextChange.emit(this.modalText);
  }
}
