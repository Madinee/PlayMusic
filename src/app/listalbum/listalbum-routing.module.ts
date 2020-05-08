import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListalbumPage } from './listalbum.page';

const routes: Routes = [
  {
    path: '',
    component: ListalbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListalbumPageRoutingModule {}
