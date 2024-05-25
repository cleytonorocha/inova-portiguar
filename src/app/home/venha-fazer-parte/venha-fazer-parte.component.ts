import { Component } from '@angular/core';
import { card } from './card';

@Component({
  selector: 'app-venha-fazer-parte',
  standalone: true,
  imports: [
  ],
  templateUrl: './venha-fazer-parte.component.html',
  styleUrl: './venha-fazer-parte.component.css'
})
export class VenhaFazerParteComponent {
  public card = card;
}
