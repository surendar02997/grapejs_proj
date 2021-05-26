import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrapesjsComponent } from './grapesjs/grapesjs.component';

const routes: Routes = [
  // {path:'grapesjs/:id',component:GrapesjsComponent}
  {path:'',component:GrapesjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
