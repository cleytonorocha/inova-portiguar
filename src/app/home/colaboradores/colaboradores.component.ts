import { Component } from '@angular/core';
import { CardColaboradores } from './CardColaboradores';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule
  ],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css',
  providers: provideAnimations()
})
export class ColaboradoresComponent {
  
  private longText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo @consequat";
  
  public cardColaboradores: CardColaboradores[] = [
    new CardColaboradores("", "assets/images/profissionais/imagem1.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardColaboradores("", "assets/images/profissionais/imagem2.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardColaboradores("", "assets/images/profissionais/imagem3.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardColaboradores("", "assets/images/profissionais/imagem4.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardColaboradores("", "assets/images/profissionais/imagem5.jpg", "Someone famous in Source Title", this.longText, ""),
    new CardColaboradores("", "assets/images/profissionais/imagem6.jpg", "Someone famous in Source Title", this.longText, ""),
    
  ]

  customOptions: OwlOptions = {
    margin: 20,
    autoplay:true,
    animateIn:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
}
