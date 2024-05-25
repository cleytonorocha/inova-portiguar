import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { SectionApresentationComponent } from "./home/section-apresentation/section-apresentation.component";
import { PrincipaisPesquisasComponent } from './home/principais-pesquisas/principais-pesquisas.component';
import { VenhaFazerParteComponent } from "./home/venha-fazer-parte/venha-fazer-parte.component";
import { ColaboradoresComponent } from './home/colaboradores/colaboradores.component';
import { EventosComponent } from './home/eventos/eventos.component';
import { InstituicoesComponent } from './home/instituicoes/instituicoes.component';
import { FooterComponent } from './home/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NavBarComponent,
    SectionApresentationComponent,
    PrincipaisPesquisasComponent,
    VenhaFazerParteComponent,
    ColaboradoresComponent,
    EventosComponent,
    InstituicoesComponent,
    FooterComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'inova-portiguar';
}
