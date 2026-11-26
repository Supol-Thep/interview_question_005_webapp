import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
     loadComponent: () =>
      import('./myqueue/it0501/it0501.component').then((m) => m.IT0501Component),
  },
  {
    path: 'it0502',
    loadComponent: () =>
      import('./myqueue/it0502/it0502.component').then((m) => m.IT0502Component),
  },
  {
    path: 'it0503',
    loadComponent: () =>
      import('./myqueue/it0503/it0503.component').then((m) => m.IT0503Component),
  },
];
