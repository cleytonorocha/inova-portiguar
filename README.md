# InovaPortiguar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Informações do Criador

O ngx-bootstrap estava dando erro direto com o CarouselModule, como só tinha versão para o angular 16, atualizei eu mesmo o problema. Consiste que o SSR do angular 17 dificulta a utilização do window/document (variaveis client), a configuração do para o hydration não se aplica a pacotes do ngx-bootstrap. Como na época não se tinha como configurar o pacote, adicionai o if(typeof window !== 'undefined) para que o erro pare de ser lançado no terminal. Não muda nada, somente os erros aparecendo no terminal. Cuidado na hora de atualizar o ngx. Caso atualize para pegar o SSR, pode resolver com o link: https://angular.io/guide/hydration.