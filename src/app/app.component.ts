import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SectionApresentationComponent } from "./section-apresentation/section-apresentation.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NavBarComponent,
        SectionApresentationComponent
    ]
})
export class AppComponent {
  title = 'inova-portiguar';
}
