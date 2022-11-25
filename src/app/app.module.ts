import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AddBiriyaniComponent } from './add-biriyani/add-biriyani.component';
import { AddSouthComponent } from './add-south/add-south.component';
import { AddchineseComponent } from './addchinese/addchinese.component';
import { AddVegComponent } from './add-veg/add-veg.component';
const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"south",
    component:AddSouthComponent
  },
  {
    path:"biriyani",
    component:AddBiriyaniComponent
  },
  {
    path:"chinese",
    component:AddchineseComponent
  },
  {
    path:"veg",
    component:AddVegComponent
  }
  

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    AddBiriyaniComponent,
    AddSouthComponent,
    AddchineseComponent,
    AddVegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
