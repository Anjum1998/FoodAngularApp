import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  number=""
  name=""
  email=""
  password=""
  confirm=""

  readValue=()=>
  {
    let data:any=
    {
      "number":this.number,"name":this.name,"email":this.email,"password":this.password,"confirm":this.confirm
    }
    console.log(data)
  }

}
