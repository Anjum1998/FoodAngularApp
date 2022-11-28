import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  number=""
  email=""
  password=""

  readValue=()=>
  { let data:any={
    "number":this.number,"email":this.email,"password":this.password
  }
  console.log(data)
}

}
