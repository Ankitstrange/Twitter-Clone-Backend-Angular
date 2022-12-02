import { Component, OnInit} from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  login!:string;
  successLogin!:any;
  user!:any;
  errorMessage!:any;

  constructor(private homeService:HomeServiceService) {
   }

  ngOnInit(): void {
  }

  next(){
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
