import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HomeComponent from "./home/home.component";
import InovarPotiguarComponent from './inovar-potiguar/inovar-potiguar.component';
import  EventosComponent  from './eventos/eventos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HomeComponent,
    InovarPotiguarComponent,
    EventosComponent
  ],
})
export class AppComponent {
  title = 'inova-portiguar';
}
