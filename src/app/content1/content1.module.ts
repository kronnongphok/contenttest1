import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Content1PageRoutingModule } from './content1-routing.module';

import { Content1Page } from './content1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Content1PageRoutingModule
  ],
  declarations: [Content1Page]
})
export class Content1PageModule {}
