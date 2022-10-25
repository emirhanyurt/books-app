import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './UI/components/books/books.component';
import { HomeComponent } from './UI/components/home/home.component';
import { LayoutComponent } from './UI/layout/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent, children:[
    {
    path:'',component:HomeComponent,
    loadChildren: () => import('./UI/components/home/home.module').then(m=>m.HomeModule)
    },
    {
      path:'book',component:BooksComponent,
      loadChildren: () => import('./UI/components/books/books.module').then(m=>m.BooksModule)
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
