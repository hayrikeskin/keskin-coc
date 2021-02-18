import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClanDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
