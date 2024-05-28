import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CarPesquisas } from '../home/principais-pesquisas/CardPesquisas';
import { SlicePipe } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inovacoes',
  standalone: true,
  imports: [
    NavBarComponent,
    SlicePipe,
    NgbPaginationModule,
    FooterComponent
  ],
  templateUrl: './inovacoes.component.html',
  styleUrl: './inovacoes.component.css'
})
export default class InovacoesComponent {
  private longText: string = 'Nos últimos anos, tem-se observado um aumento significativo no número de pessoas que associam suas pesquisas às marcas. A internet e as redes sociais tornaram as marcas mais acessíveis e interativas, enquanto a proliferação de dispositivos móveis facilita a busca por informações específicas. Além disso, estratégias de marketing digital, como SEO e marketing de conteúdo, ajudam as marcas a serem facilmente encontradas, construindo confiança e autoridade junto ao público.';

  public cards: CarPesquisas[] = [
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image1.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image2.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image3.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image4.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image5.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image6.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image7.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image8.png", "", this.longText, ""),
    new CarPesquisas("Ciência no Brand!", "assets/images/pesquisas/image8.png", "", this.longText, ""),
  ]

  page = 1;
  pageSize = 10;
}
