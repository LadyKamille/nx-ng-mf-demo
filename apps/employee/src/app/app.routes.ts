import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () =>
      loadRemoteModule('todo', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: AppComponent,
  },
];
