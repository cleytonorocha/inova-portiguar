import { Component } from '@angular/core';
import { FooterComponent } from '../home/footer/footer.component';
import { NavBarComponent } from '../home/nav-bar/nav-bar.component';

@Component({
  selector: 'app-inovar-potiguar',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './inovar-potiguar.component.html',
  styleUrl: './inovar-potiguar.component.css'
})
export default class InovarPotiguarComponent {

}
