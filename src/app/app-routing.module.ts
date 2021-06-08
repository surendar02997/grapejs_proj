import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrapesjsComponent } from './grapesjs/grapesjs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:'grapesjs/:id',component:GrapesjsComponent}
  // {path:'home',component:HomeComponent},
  // {path:'',component:GrapesjsComponent},
  // {path:':id',component:GrapesjsComponent}
  
  {path:'',component:HomeComponent},
  {path:'grapesjs',component:GrapesjsComponent},
  
  {path:':id',component:GrapesjsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
