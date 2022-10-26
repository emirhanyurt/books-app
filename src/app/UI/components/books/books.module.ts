import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBookModule } from './add-book/add-book.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes =[
  {path:'',component:BooksComponent}
]

@NgModule({
  declarations: [
    BooksComponent,
   
  ],
  imports: [
    CommonModule,
    AddBookModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    BooksComponent
  ]
})
export class BooksModule { }
