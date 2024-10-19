import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { connectionUrl } from '../service/connectivity';

@Component({
  selector: 'app-api-connectivity',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './api-connectivity.component.html',
  styleUrl: './api-connectivity.component.css'
})
export class ApiConnectivityComponent {

  bookArr:any = [];

  backEndUrl:string = connectionUrl

  data:string = ""

  bookAdd: FormGroup = new FormGroup({
    bookName: new FormControl("", [Validators.required, Validators.maxLength(35)]),
    bookPrice: new FormControl("", [Validators.required]),
    authorName: new FormControl("", [Validators.required, Validators.maxLength(35)]),
    publishedDate: new FormControl("", [Validators.required])
  })

  constructor(private http:HttpClient){
    this.showRecords()
  }


  showRecords(){
     this.http.get(`${this.backEndUrl}show_records`).subscribe(
      success=>{
        this.bookArr = success
      },failure=>{
        alert("Kuch Toh Gadbad hai Daya...!")
        console.log(failure);
      }
    )
  }

  showRecord(){
    this.http.get(`${this.backEndUrl}show_by_date/${this.data}`).subscribe(
      success=>{
        this.bookArr = success
      },failure=>{
        alert("Kuch Toh Gadbad hai Daya...!")
        console.log(failure);
      }
    )
  }

  handleSubmit() {
    if(this.getBookName.errors==null && this.getBookPrice.errors==null && this.getAuthorName.errors== null && this.getPublishedDate.errors == null){
      this.http.post(`${this.backEndUrl}add_record`, this.bookAdd.value ).subscribe(
        success=>{
          alert("Record Added Successfully.")
          console.log(success);
          this.showRecords()
        },error=>{
          alert("Something Fishy is going on...!")
          console.log(error);          
        }
      )
    }else{
      alert("Some error is seen while entering the data.")
    }
  }


  get getBookName():any{
    return this.bookAdd.get('bookName')
  }

  get getBookPrice():any{
    return this.bookAdd.get('bookPrice')
  }

  get getAuthorName():any{
    return this.bookAdd.get('authorName')
  }

  get getPublishedDate():any{
    return this.bookAdd.get('publishedDate')
  }


}
