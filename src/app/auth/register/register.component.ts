import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../model/register';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  constructor(private registerService: RegisterService,private router:Router) { }
  registerData:any=new Register();
  error:any={}
  sub=0;

  ngOnInit(): void {
  }

  doRegister(){
    console.log(this.registerData)
    this.registerData.roleId=Number.parseInt(this.registerData.roleId)
    this.registerService.doRegister(this.registerData).subscribe((result)=>{

      console.log(result)

      //this.router.navigate(['/login']);
    },(err)=>{
      console.log(err)
      this.sub=1;
      this.error=err.error;
      console.log(this.error)
    })
  }

  //clear form data
    clearForm(){
      this.registerData=new Register();
    }


}
