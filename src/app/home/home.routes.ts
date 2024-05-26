import { Route } from "@angular/router";

export default (tituloPadrao: string): Route => {
    const routesConfig: Route = {
        path: '',
        title: tituloPadrao,
        loadComponent : (() => import('./home.component'))
    }
    return routesConfig;
}