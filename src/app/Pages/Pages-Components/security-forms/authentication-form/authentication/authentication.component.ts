import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private fb : FormBuilder,public router: Router) { }

  ngOnInit(){
  }
  
  loginForm = this.fb.group({
    loginUserName: ['',Validators.required],
    loginPassword: ['',Validators.required]
  })

  username = this.loginForm.get('loginUserName').value;
  password = this.loginForm.get('loginPassword').value;

  login(){
    if(this.username=="overlord" && this.password == "pg67aw"){
      this.router.navigateByUrl('/adminMain');
    }
  }

  logout(){
  }




}
