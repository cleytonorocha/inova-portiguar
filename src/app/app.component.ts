import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionApresentationComponent } from "./section-apresentation/section-apresentation.component";
import { PrincipaisPesquisasComponent } from './principais-pesquisas/principais-pesquisas.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NavBarComponent,
        SectionApresentationComponent,
        PrincipaisPesquisasComponent
    ]
})
export class AppComponent {
  title = 'inova-portiguar';
}
