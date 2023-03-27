import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import {
  LoginComponent,
  PortafolioComponent,
} from './components/index.paginas';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: '**', component: PortafolioComponent },
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
