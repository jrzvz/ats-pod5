import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'mfee-project-grid',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  cards = [
    {
      imageSrc: 'source path for card1',
      text: 'diplay text for card1'
    }
  ];

  delete(i: number) {
    this.cards.splice(i, 1);
  }
}
