import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'mfee-project-card',
  standalone: true,
  imports: [CommonModule, EditModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardText: string = '';
  @Input() imageSrc: string = '';
  @Input() index: number = -1;

  @Output() deleteEmitter = new EventEmitter<number>();

  openEditModal(i: number) {
    document.getElementById('modal' + i).style.display = 'block';
  }

  delete(i: number) {
    this.deleteEmitter.emit(i);
  }
}
