import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Content1Page } from './content1.page';

const routes: Routes = [
  {
    path: '',
    component: Content1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Content1PageRoutingModule {}
