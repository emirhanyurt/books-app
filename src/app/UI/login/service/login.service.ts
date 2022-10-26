import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginModel } from '../model/login';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient,
    private router:Router,
    private spinner: NgxSpinnerService,
    private toastr:ToastrService
    
  ) { }
  login(LoginModel:LoginModel){
    this.spinner.show()
    let api = this.apiUrl + "users/login"
     this.httpClient.post(api,LoginModel).subscribe((res:any)=>{
      this.spinner.hide()
      localStorage.setItem("Token",res.data.token)
      this.toastr.success("Giriş Başarılı")
      this.router.navigate(["/"])
     },(err)=>{
      this.spinner.hide()
      console.log(err)
     })

  }
  logout(){
    this.spinner.show()
    localStorage.clear()
    this.spinner.hide()
    this.router.navigate(["/login"])
  }
}
