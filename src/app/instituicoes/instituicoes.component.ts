import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-instituicoes',
  standalone: true,
  imports: [
    NavBarComponent,

    FooterComponent
  ],
  templateUrl: './instituicoes.component.html',
  styleUrl: './instituicoes.component.css'
})
export default class InstituicoesComponent {
  public images : String[] = [
    'assets/logo/instituicoes/logo1.jpg',
    'assets/logo/instituicoes/logo2.jpg',
    'assets/logo/instituicoes/logo3.jpg',
    'assets/logo/instituicoes/logo4.jpg',
    'assets/logo/instituicoes/logo5.jpg',
    'assets/logo/instituicoes/logo6.jpg',
    'assets/logo/instituicoes/logo7.jpg',
    'assets/logo/instituicoes/logo8.jpg',
    'assets/logo/instituicoes/logo9.jpg',
    'assets/logo/instituicoes/logo10.jpg',
  ]
}
