import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginData:any=new Login();
   formgroup: FormGroup = new FormGroup({
    username: new FormControl(this.loginData.username,Validators.required),
    password: new FormControl(this.loginData.password,Validators.required),
  });

  
  error:any={
    username:false,
    password:false
  }

  
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    console.log(this.loginData,this.formgroup)
    this.loginService.doLogin(this.loginData).subscribe((result)=>{

      console.log(result)

      //this.router.navigate(['/login']);
    },(err)=>{
      console.log(err)
    })


    

  }

}
