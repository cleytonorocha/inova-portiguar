import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { EventosComponent } from './eventos/eventos.component';
import { FooterComponent } from '../footer/footer.component';
import { InstituicoesComponent } from './instituicoes/instituicoes.component';
import { PrincipaisPesquisasComponent } from './principais-pesquisas/principais-pesquisas.component';
import { SectionApresentationComponent } from './section-apresentation/section-apresentation.component';
import { VenhaFazerParteComponent } from './venha-fazer-parte/venha-fazer-parte.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    SectionApresentationComponent,
    PrincipaisPesquisasComponent,
    VenhaFazerParteComponent,
    ColaboradoresComponent,
    EventosComponent,
    InstituicoesComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
