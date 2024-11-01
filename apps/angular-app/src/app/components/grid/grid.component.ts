import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { JsonServerService } from '../../services/json-server/json-server.service';

@Component({
  selector: 'mfee-project-grid',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  cards = [];

  constructor(private jsonServerService: JsonServerService) { }

  ngOnInit() {
    this.getAllData();
  }

  delete(i: number) {
    this.cards.splice(i, 1);
  }

  // services
  getAllData() {
    this.jsonServerService.getData().subscribe(
      data => this.cards = data as any
    );
  }
}
