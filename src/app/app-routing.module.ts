import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/components/home/home.component';
import { LayoutComponent } from './UI/layout/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent, children:[
    {path:'',component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
