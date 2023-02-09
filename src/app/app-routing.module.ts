import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const usersModule = () =>
  import('./users/users.module').then((x) => x.UsersModule);

const devicesModule = () =>
  import('./devices/devices.module').then((x) => x.DevicesModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'devices', loadChildren: devicesModule },
  //{ path: 'users', loadChildren: usersModule },
  { path: 'users', loadChildren: usersModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
