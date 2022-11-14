import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inputSelected!:boolean;
  login!:string;
  successLogin!:string;
  user!:any;
  errorMessage!:string;

  constructor(private homeService:HomeServiceService) {
    this.login='Ankit@1234';
   }

  ngOnInit(): void {
  }

  next(){
    console.log("Entered"+this.login);
    this.login = this.login.trim();
    if(this.login && this.login!=""){
      this.homeService.login(this.login).subscribe({
        next:(value)=>{
          this.successLogin="User Logged in Successfully";
          this.user=value[0];
        },
        error:(error)=>{
          this.errorMessage=error?.message;
        }
      })
    }
  }

}
