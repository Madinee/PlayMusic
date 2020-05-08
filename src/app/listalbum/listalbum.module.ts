import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListalbumPageRoutingModule } from './listalbum-routing.module';

import { ListalbumPage } from './listalbum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListalbumPageRoutingModule
  ],
  declarations: [ListalbumPage]
})
export class ListalbumPageModule {}
