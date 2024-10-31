import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfee-project-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerTitles: string[] = [
    "All",
    "Travel",
    "Lifestyle",
    "Business",
    "Work"
  ];
  selectedHeader = 'All';

  selectHeaderItem(header: string) {
    this.selectedHeader = header;
  }

  activationLogic(header: string): string {
    if (this.selectedHeader === header) {
      return 'nav-link active'
    } else {
      return 'nav-link'
    }
  }
}
