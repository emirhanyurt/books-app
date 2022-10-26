import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addForm:FormGroup
  file:any
  formData:any
  currentImage:string = ""
  constructor(private bookService:BookService,private fromBuilder:FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createAddForm()
  }

  createAddForm(){
    this.addForm = this.fromBuilder.group({
      id: [0],
      name: ["",[Validators.required,Validators.minLength(3)]],
      writer: ["",[Validators.required,Validators.minLength(3)]],
      publishDate: ["", [Validators.required]],
      isActive: [true],
      isAvailable: [true],
      imageUrl: ["", [Validators.required]],
      guid: ["guid"]
    })
  }
  add()
  {
    if(this.addForm.valid)
    {
    let result = this.bookService.add(this.formData,this.addForm.value)
    if(result)
    {
      this.addForm.reset()
    }
       }
    else{
      this.toastr.error("Zorunlu Alanları Doldurun")
    }
  }
  changeImage(event:any)
  {
    if(event.target.files && event.target.files[0]){
      this.file = event.target.files[0]
      if(this.file.size > 5000000){
        this.toastr.warning("Dosya Boyutu 5mb dan büyük olamaz","İşlem Hatası")
        this.addForm.controls["imageUrl"].setValue("")
      } 
      var reader = new FileReader()
      reader.onload = (event:any)=>{
        this.currentImage = event.target.result
      }
      reader.readAsDataURL(event.target.files[0])
      this.formData = new FormData
     this.formData.append("file",this.file,this.file.name)
      console.log(this.file)
    }
  }

}
