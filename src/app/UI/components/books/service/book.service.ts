import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {  NgxSpinnerService,  } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BookModel } from '../model/bookModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private toastr:ToastrService,
    private httpClient:HttpClient,
    private spinner:NgxSpinnerService,
    @Inject("apiUrl") private apiUrl:string,) { }
   add(file:any,BookModel:BookModel):boolean{
      this.spinner.show()
      let api = this.apiUrl +"books/addImage"

      this.httpClient.post(api,file).subscribe((res:any)=>{
        let fileName = res.fileName
        BookModel.imageUrl= fileName
        let api = this.apiUrl +"books/add"
        this.httpClient.post(api, BookModel).subscribe((res:any)=>{
            this.spinner.hide()
            this.toastr.success("Ekleme İşlemi Başarılı")
            return true
        },(err)=>{
          this.spinner.hide()
          console.log(err)
          return false
        })



      },(err)=>{
        this.spinner.hide()
        console.log(err)
        return false
      })

      return true
   }
}
