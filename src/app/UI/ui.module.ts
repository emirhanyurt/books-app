import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentModule } from './components/component.module';
import { LoginModule } from './login/login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    LoginModule,
    ComponentModule
  ],
  exports:[
    LayoutModule,
    ComponentModule,
    LoginModule
  ]
})
export class UiModule { }
