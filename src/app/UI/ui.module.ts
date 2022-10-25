import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentModule } from './components/component.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentModule
  ],
  exports:[
    LayoutModule,
    ComponentModule
  ]
})
export class UiModule { }
