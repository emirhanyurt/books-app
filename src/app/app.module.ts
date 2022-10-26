import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './UI/ui.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './UI/login/interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  
  providers: [{provide:'apiUrl',useValue:'https://webapi.angulareducation.com/api/'},{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
