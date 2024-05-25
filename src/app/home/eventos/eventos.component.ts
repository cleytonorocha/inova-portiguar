import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardEvento } from './CardEvento';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

  private longText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo @consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo @consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo @consequat ";

  public cardsEvento: CardEvento[] = [
    new CardEvento("", "assets/images/eventos/imagem1.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardEvento("", "assets/images/eventos/imagem2.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardEvento("", "assets/images/eventos/imagem3.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardEvento("", "assets/images/eventos/imagem4.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardEvento("", "assets/images/eventos/imagem5.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardEvento("", "assets/images/eventos/imagem6.jpg", "Someone famous in Source Title", this.longText, ""),
    
  ]
}
