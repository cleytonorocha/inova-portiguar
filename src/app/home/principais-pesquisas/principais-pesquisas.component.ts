import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarPesquisas } from './CardPesquisas';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-principais-pesquisas',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule
  ],
  templateUrl: './principais-pesquisas.component.html',
  styleUrl: './principais-pesquisas.component.css',
  providers: provideAnimations()
})
export class PrincipaisPesquisasComponent {
  private longText: string = 
  'Nos últimos anos, tem-se observado um aumento significativo no número de pessoas que associam suas pesquisas às marcas. A internet e as redes sociais tornaram as marcas mais acessíveis e interativas, enquanto a proliferação de dispositivos móveis facilita a busca por informações específicas. Além disso, estratégias de marketing digital, como SEO e marketing de conteúdo, ajudam as marcas a serem facilmente encontradas, construindo confiança e autoridade junto ao público.';

  public cardColaboradores: CarPesquisas[] = [
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image1.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image2.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image3.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image4.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image5.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image6.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image7.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image8.png", "", this.longText, ""),

  ]

  customOptions: OwlOptions = {
    margin: 10,
    autoplay: true,
    animateIn: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    dotsData: true,
    navText: ['<','>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
