import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionApresentationComponent } from "./home/section-apresentation/section-apresentation.component";
import { PrincipaisPesquisasComponent } from './home/principais-pesquisas/principais-pesquisas.component';
import { VenhaFazerParteComponent } from "./home/venha-fazer-parte/venha-fazer-parte.component";
import { ColaboradoresComponent } from './home/colaboradores/colaboradores.component';
import { EventosComponent } from './home/eventos/eventos.component';
import { InstituicoesComponent } from './home/instituicoes/instituicoes.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [
        RouterOutlet,
        HomeComponent
    ]
})
export class AppComponent {
  title = 'inova-portiguar';
}
