import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, CardComponent, EditModalComponent],
  selector: 'mfee-project-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
