import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {Routes, RouterModule} from '@angular/router';

import { HomePageRoutingModule } from './home-routing.module';
import { from } from 'rxjs';
import { ListalbumPage } from '../listalbum/listalbum.page';

const route: Routes=[
  {
    path:'',
    component:HomePage
  },
  {
    path:':id',
    component:ListalbumPage,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
