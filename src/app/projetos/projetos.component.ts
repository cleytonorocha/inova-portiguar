import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    NavBarComponent,
    
    FooterComponent
  ],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export default class ProjetosComponent {

}
