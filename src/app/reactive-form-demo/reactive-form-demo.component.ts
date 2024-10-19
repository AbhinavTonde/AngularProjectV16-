import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-demo.component.html',
  styleUrl: './reactive-form-demo.component.css'
})
export class ReactiveFormDemoComponent {

  myForm:FormGroup = new FormGroup({
    uName:new FormControl("Shailesh", Validators.required),
    uAge:new FormControl(21, [Validators.required, Validators.min(0), Validators.max(100)] ),
    uContNo:new FormControl("89797845520", [Validators.maxLength(10), Validators.pattern('[0-9 ]*'), Validators.required])
  })

  get getterForUserName():any{
    return this.myForm.get('uName');
  }

  get getUserAge():any{
    return this.myForm.get('uAge')
  }

  get getUserContact():any{
    return this.myForm.get('uContNo')
  }

  handleSubmit(){

    if(this.getUserContact.errors==null)
      console.log(this.myForm.value);
    else
      alert("Kuch toh gadabad hai Daya....!!!!!")

  }



}
