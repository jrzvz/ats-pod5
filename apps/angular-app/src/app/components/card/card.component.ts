import { Component } from '@angular/core';
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
  cardText: string = `This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.`;
}
