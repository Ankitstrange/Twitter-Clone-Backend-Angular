import { Component, OnInit, DoCheck } from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck{

  inputSelected!:boolean;
  login!:string;
  successLogin!:any;
  user!:any;
  errorMessage!:any;

  constructor(private homeService:HomeServiceService) {
   // this.login='Ankit@1234';
   }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if(this.inputSelected){
      console.log("Entered");
      document.getElementById("login")?.focus();
    }
  }

  next(){
    console.log("Entered"+this.login);
    this.login = this.login.trim();
    if(this.login && this.login!=""){
      this.homeService.login(this.login).subscribe({
        next:(value)=>{
          this.successLogin="User Logged in Successfully";
          this.user=value[0];
          this.errorMessage=undefined;
        },
        error:(error)=>{
          this.successLogin=undefined;
          this.user=undefined;
          this.errorMessage=error?.message;
        }
      })
    }
  }

}
