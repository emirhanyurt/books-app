import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './UI/components/books/add-book/add-book.component';
import { BooksComponent } from './UI/components/books/books.component';
import { HomeComponent } from './UI/components/home/home.component';
import { LayoutComponent } from './UI/layout/layout/layout.component';
import { AuthGuard } from './UI/login/login/guard/auth.guard';
import { LoginComponent } from './UI/login/login/login.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,canActivateChild: [AuthGuard], children:[
    {
    path:'',component:HomeComponent,
    loadChildren: () => import('./UI/components/home/home.module').then(m=>m.HomeModule)
    },
    {
      path:'book',component:BooksComponent,
      loadChildren: () => import('./UI/components/books/books.module').then(m=>m.BooksModule)
    },
    {
      path:'book/add',component:AddBookComponent,
      loadChildren: () => import('./UI/components/books/add-book/add-book.module').then(m=>m.AddBookModule)
    }
  ]},
  {
    path:'login',
    component:LoginComponent,
    loadChildren: () => import('./UI/login/login/login.module').then(m=>m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
