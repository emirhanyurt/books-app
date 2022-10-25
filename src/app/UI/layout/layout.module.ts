import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav/sidenav.component';
import { NavbarComponent } from './layout/navbar/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    SidenavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LayoutComponent,
    FooterComponent,
    SidenavComponent,
    NavbarComponent,
    

  ]
})
export class LayoutModule { }
