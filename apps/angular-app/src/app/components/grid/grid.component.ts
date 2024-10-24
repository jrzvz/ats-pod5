import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfee-project-grid',
  standalone: true,
  imports: [CommonModule],
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
}
