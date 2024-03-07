import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./routes/list/list.component').then((c) => c.ListComponent),
      },
      {
        path: 'flow',
        loadComponent: () =>
          import('./routes/flow/flow.component').then((c) => c.FlowComponent),
      },
      {
        path: 'data',
        loadChildren: () =>
          import('./routes/data/data.module').then((m) => m.DataModule),
      },
    ],
  },
];

export const MainRoutingModule = RouterModule.forChild(routes);
